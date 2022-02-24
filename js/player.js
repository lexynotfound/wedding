var songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3"
];

var song = new Audio();
var currentSong = 0;
var len = songs.length;

function playSong(index) {
    song.src = songs[index];
    song.play();
}
song.addEventListener("ended", function playNextS() {
    currentSong++;
    if (currentSong == len) {
        currentSong = 0;
        playSong(currentSong);
    }
    else {
        playSong(currentSong);
    }
});