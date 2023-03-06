let countHome = 0
let countGuest = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function increaseHomeScore1() {
    countHome += 1
    homeEl.textContent = countHome
    leader()
}

function increaseHomeScore2() {
    countHome += 2
    homeEl.textContent = countHome
    leader()
}

function increaseHomeScore3() {
    countHome += 3
    homeEl.textContent = countHome
    leader()
}

function increaseGuestScore1() {
    countGuest += 1
    guestEl.textContent = countGuest
    leader()
}

function increaseGuestScore2() {
    countGuest += 2
    guestEl.textContent = countGuest
    leader()
}

function increaseGuestScore3() {
    countGuest += 3
    guestEl.textContent = countGuest
    leader()
}

function newGame() {
    countHome = 0
    countGuest = 0
    homeEl.textContent = countHome
    guestEl.textContent = countGuest
    leader()
}

function leader() {
if (+(homeEl.textContent) > +(guestEl.textContent)) {
    homeEl.style.borderColor = "green"
    guestEl.style.borderColor = "#FF601C"

} else if (+(homeEl.textContent) < +(guestEl.textContent)) {
    homeEl.style.borderColor = "#FF601C"
    guestEl.style.borderColor = "green"
    
} else {
    homeEl.style.borderColor = "white"
    guestEl.style.borderColor = "white"
}
}

// TIMER

var timer = document.getElementById("timer");
var quarters = document.getElementById("quarters");
var seconds = 0;
var minutes = 0;
var quarter = 1;
var timerInterval;

function startTimer() {
    timerInterval = setInterval(incrementTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    quarter = 1;
    timer.innerHTML = "00:00";
    quarters.innerHTML = "1st Quarter";
    countHome = 0
    countGuest = 0
    homeEl.textContent = countHome
    guestEl.textContent = countGuest
    leader()
}

function incrementTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes < 10) {
        timer.innerHTML = "0" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    } else {
        timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    if (minutes == 10 && seconds == 0) {
        quarter++;
        if (quarter <= 4) {
            quarters.innerHTML = quarter + (quarter == 1 ? "st" : quarter == 2 ? "nd" : quarter == 3 ? "rd" : "th") + " Quarter";
        } else {
            pauseTimer();
            quarters.innerHTML = "Game Over";
        }
    }
}