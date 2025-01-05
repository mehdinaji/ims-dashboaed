document.addEventListener("DOMContentLoaded", function() {
function updateTime() {
let options = { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let now = new Date().toLocaleDateString('fa-IR', options).replace(/،/g, ' -');
document.getElementById("time-display").textContent = now;
}

updateTime();
setInterval(updateTime, 1000);
});