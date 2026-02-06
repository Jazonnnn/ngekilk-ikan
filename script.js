const ikan1 = document.getElementById('ikan-tutup');
const stats = document.getElementById('goldfish-clicked');
const clicks_seconds = document.getElementById("clicks-per-second")
const openImg = "ikan.jpeg";
const closeImg = "ikan2.png";
let count = 0; 
let cps = 0;
function pressFish() {
    ikan1.src = openImg;
    count++;
    cps++;
    stats.textContent = count;
}
function closeFish() {
    ikan1.src = closeImg;
}

setInterval(() => {
    clicks_seconds.textContent = cps + "cps"
    cps = 0;
}, 1000);

ikan1.addEventListener("mousedown",pressFish);
ikan1.addEventListener("mouseup",closeFish);
ikan1.addEventListener("mouseleave",closeFish);
