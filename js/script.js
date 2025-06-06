console.log("Welcome!");
let songindex = 0;
let audioElement = new Audio('/music/heymama.mp3');
let masterkey = document.getElementById('masterkey');
let myprogress = document.getElementById('songseek');

let songs = [
    { songname: "This", filepath: "songs1.mp3", coverpath: "cover1.jpg" },
    { songname: "This", filepath: "songs1.mp3", coverpath: "cover1.jpg" },
    { songname: "This", filepath: "songs1.mp3", coverpath: "cover1.jpg" },
    { songname: "This", filepath: "songs1.mp3", coverpath: "cover1.jpg" },

]


// Eventlistner
masterkey.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime<= 0) {
        audioElement.play();
       
    }

    else{
        audioElement.pause();
        
    }
})

myprogress.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
})

