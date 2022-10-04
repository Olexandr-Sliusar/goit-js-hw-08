import { throttle } from 'lodash';

const STORAGE_FORM_DATA_KEY = 'feedback-form-state';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

function getFormDataInLocalStorage() {
  try {
    const feedbackFormState = localStorage.getItem('feedback-form-state');
    if (feedbackFormState) {
      return JSON.parse(feedbackFormState);
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  return false;
}

function setFormDataInLocalStorage(feedbackForm) {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function removeFormDataInLocalStorage(key) {
  localStorage.removeItem(key);
}

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onSubmit);

window.onload = onLoadPage();

function onLoadPage() {
  DataInLocalStorage = getFormDataInLocalStorage();
  if (DataInLocalStorage) {
    for (const el in refs) {
      if (DataInLocalStorage[refs[el].name]) {
        refs[el].value = DataInLocalStorage[refs[el].name];
      }
    }
  } else {
    DataInLocalStorage = {};
  }
}

function onInput(e) {
  DataInLocalStorage[e.target.name] = e.target.value;
  setFormDataInLocalStorage(DataInLocalStorage);
}

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  removeFormDataInLocalStorage(STORAGE_FORM_DATA_KEY);
}
