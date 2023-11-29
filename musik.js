
const rootElement = document.querySelector(":root");
const audioiconwrapper = document.querySelector('.audio-icon-wrapper');
const audioicon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isplaying = false;


function disableScroll(){
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function(){
            window.scrollTo(scrollTop, scrollLeft);
        }
        
        rootElement.style.scrollBehavior = 'auto';
    }

    function enableScroll(){
      window.onscroll = function(){}
      rootElement.style.scrollBehavior = 'smooth';
      playAudio();
    }

    function playAudio(){
      
      song.volume = 1;
      audioiconwrapper.style.display = 'flex';
      song.play();
      isplaying = true;
    }

    audioiconwrapper.onclick = function(){
    if(isplaying){
      song.pause();
      audioicon.classList.remove('bi-music-note-beamed');
      audioicon.classList.add('bi-pause-fill');
    }else{
      song.play();
      audioicon.classList.add('bi-music-note-beamed');
      audioicon.classList.remove('bi-pause-fill');
    }

    isplaying = !isplaying
    }

    disableScroll();