import { throttle } from 'lodash';
import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

function onLoadPage() {
  const curreyntTime = getCurreyntTimeInLocalStorage();
  if (curreyntTime) {
    player.setCurrentTime(curreyntTime);
  }
}

function onTimeUpdate() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      setCurreyntTimeInLocalStorage(seconds);
    })
    .catch(function (error) {
      console.log(error.name);
      console.log(error.message);
    });
}

function getCurreyntTimeInLocalStorage() {
  return localStorage.getItem(CURRENT_TIME_KEY);
}

function setCurreyntTimeInLocalStorage(seconds) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

window.onload = onLoadPage();

player.on('timeupdate', throttle(onTimeUpdate, 1000));
