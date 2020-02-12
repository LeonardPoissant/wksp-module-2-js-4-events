// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector('body');

const result = document.getElementById('result');


const time = Math.floor((Math.random()*5) +1);
document.getElementById('timer').innerText = time;


let winning = false;

let tickingTime  = time -1; 

const counter = setInterval(function(){
    if (tickingTime === 0){
        clearInterval(counter)
    }
    timer.innerText = tickingTime;
    tickingTime = time -1;
}, 1000);


function handleClick(){
    winning = true;
    result.innerText = 'You made it!';
    body.removeEventListener('click', handleClick);

}

setTimeout(function(){
    if (!winning){
        result.innerText = 'Better luck next time...';
        body.removeEventListener('click', handleClick)
    }
}, time *1000);

body.addEventListener('click', handleClick);