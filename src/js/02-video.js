import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));
    function onPlay({seconds} = 0) {
        localStorage.setItem(STORAGE_KEY, seconds);
    }

    if (localStorage.getItem(STORAGE_KEY)) {
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }

    