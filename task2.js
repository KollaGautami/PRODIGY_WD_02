let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let resetButton = document.getElementById("reset-button");
let display = document.getElementById("display");

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now();
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    playButton.style.display = "none";
    pauseButton.style.display = "block";
}

function pause() {
    clearInterval(timerInterval);
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}

function reset() {
    startTime = 0;
    elapsedTime = 0;
    print("00:00:00");
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);