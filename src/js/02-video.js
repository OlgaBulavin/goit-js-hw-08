import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));
    
    function onPlay({seconds}) {
        localStorage.setItem(STORAGE_KEY, seconds);
    }


    player.setCurrentTime(onSavedTimeInStorage).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
            break;
            default:
            break;
        }
      });

   


    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));


    