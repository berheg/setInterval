const timerText = document.getElementById('timerText');
const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
let count = 0;
let intervalID;

btnStart.addEventListener('click', timer);
function timer(){
    intervalID = setInterval(() => {
        count += 1;
        timerText.innerHTML = count;
    }, 1000);
};
btnPause.addEventListener('click', pauseTimer);
function pauseTimer(){
    clearInterval(intervalID);
}