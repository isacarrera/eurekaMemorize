const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let musicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fa-solid fa-music"></i> Música'; 
    } else {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fa-solid fa-pause"></i> Música'; 
    }
    musicPlaying = !musicPlaying;
});


document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('info-button');
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    infoButton.addEventListener('click', () => {
        infoModal.show(); 
    });
    document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', () => {
        infoModal.hide(); 
    });
});
document.getElementById('volume-control').addEventListener('input', function(event) {
    var volume = event.target.value / 100;
    document.getElementById('background-music').volume = volume;
});