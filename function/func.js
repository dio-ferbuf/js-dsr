// Ubah videos ke array
let arrVideos = Array.from(document.querySelectorAll("[data-duration]"));

let totalSeconds = arrVideos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))
// Ambil durasi video, () atribute data-duration dibuat sendiri) makannya paje dataset untuk mengambil atributnya
    .map(item => item.dataset.duration)
// mnt:scnd ke detik
    .map( waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));                
        return (parts[0] * 60) + parts[1];       
    })
    .reduce((previouseVal, currentVal) => previouseVal + currentVal);

totalVideo = arrVideos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const hours = Math.floor(totalSeconds / 3600);
if (hours > 0 ){
    totalSeconds = totalSeconds - (hours * 3600);    
} 
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds - ((hours * 3600) + (minutes * 60))

// DOM 
const totalMyVideo = document.querySelector(".total").getElementsByClassName('video')[0];
const totalDuration = document.querySelector(".total").getElementsByClassName('duration')[0];

totalMyVideo.textContent = totalVideo;
totalDuration.textContent = `${hours} hours ${minutes} minutes ${seconds} seconds`;