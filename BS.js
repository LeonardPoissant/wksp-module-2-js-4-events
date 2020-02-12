main.style.display = 'flex';
main.style.alignItems = 'center';
main.style.justifyContent = 'center';
main.style.flexDirection = 'column';

button.style.width = '300px';
button.style.length = '500px';


let timer = setInterval(function(){


}, 1000);

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds.innerHTML = okGo(totalSeconds % 60);
  minutes.innerHTML = okGo(parseInt(totalSeconds / 60));
}

function okGo(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


function handleClick(){

  button.innerText = 'STOP';
  //ADD TOGGLE
  
  //PUT THE SET INTERVAL
 if(!isStarded){
  setTime();

   okGo();

  }


  body.removeEventListener('click', handleClick)

}


body.addEventListener('click', handleClick)

// Create new element button in the body
// Create a stop watch (00:00)
// Add an eventlistener to it that will
// ONE. change the button text to stop 
// TWO. START THE TIMER.
// 


footer.style.display = 'flex';
footer.style.alignItems = 'center';
footer.style.justifyContent = 'center';

const time = Math.floor((Math.random()*5) +1);
document.getElementById('timer2').innerText = time;


let winning = false;

let tickingTime  = time -1; 

const counter = setInterval(function(){
    if (tickingTime === 0){
        clearInterval(counter)
    }
    timer2.innerText = tickingTime;
    tickingTime = time -1;
}, 1000);


function handleClick(){
    winning = true;
    result.innerText = 'You made it!';
    body.removeEventListener('click', handleClick2);

}

setTimeout(function(){
    if (!winning){
        result.innerText = 'Better luck next time...';
        body.removeEventListener('click', handleClick2)
    }
}, time *1000);


const button = document.createElement('button');
button.innerText = 'START';
main.appendChild(button);

body.addEventListener('click', handleClick);
body.addEventListener('click', handleClick2);
