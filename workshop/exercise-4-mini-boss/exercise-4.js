const body = document.querySelector('body');
const startButton = document.getElementById('starter');
const timer = document.getElementById('timer');
const main = document.getElementById('main');
const alert = document.getElementById('alert');

const NUM_BUTTONS = Math.floor(Math.random() * 10) + 1;
const GAME_TIME = 5000; // in miliseconds

const clickedState = [];

function checkArray(arr) {
    return arr.every(function(item) {
        return item
    });
}

function endGame() {
    // to win the game ALL buttons must be green
    alert.style.height = '200px';
    alert.style.paddingTop = '74px';
    if (checkArray(clickedState)) {
        alert.innerText = "You fast Boi!!!";
        alert.style.background = 'green';
    } else {
        alert.innerText = "Too slow...";
        alert.style.background = 'red';
    }

    // clear all of the setIntervals
    for (let i = 0; i < NUM_BUTTONS; i++) {
        document.getElementById(`btn-${i}`).removeEventListener('click', toggleColor);
    }
}

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');

    // get id
    const id = buttonId.split('-')[1];
    // toggle clickedState value
    clickedState[id] = !clickedState[id];
}

function startGame() {
    // remove the start button
    startButton.remove();

    // start timer
    timer.innerText = GAME_TIME / 1000;
    let seconds = GAME_TIME - 1000;
    const countdown = setInterval(function() {
        if (seconds < 1) {
            clearInterval(countdown);
            endGame();
        }
        timer.innerText = seconds / 1000;
        seconds -= 1000;
    }, 1000);

    // add buttons
    for (let i = 0; i < NUM_BUTTONS; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.id = `btn-${i}`;
        button.style.top = `${Math.random() * 575}px`;
        button.style.left = `${Math.random() * 775}px`;
        
        main.appendChild(button);

        clickedState.push(false);
    
        button.addEventListener('click', toggleColor);
    }

    const buttonStatus = setInterval(function() {
        if (checkArray(clickedState)) {
            timer.innerText = 0;
            endGame();
            clearInterval(buttonStatus);
        }
    }, 400);
}

