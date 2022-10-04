// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const navGalaryEl = document.querySelector('.gallery');

function makeGallery(galleryItems) {
  const galleryItemsMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img  
                  class="gallery__image"
                  src="${preview}" 
                  alt="${description}"
                   />
              </a>`;
    })
    .join('');
  return navGalaryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
