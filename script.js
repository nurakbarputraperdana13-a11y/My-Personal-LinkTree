const musicBg = document.getElementById("music");
const buttonPlay = document.getElementById("play-music");
const textMusic = document.getElementById("text-music");
const spinImgMusic = document.querySelector("#spin");

buttonPlay.addEventListener("click", function(){
    if(musicBg.paused){
        musicBg.play();
        spinImgMusic.classList.add("active");
    }
    else {
        musicBg.pause();
        spinImgMusic.classList.remove("active");
    }
})
