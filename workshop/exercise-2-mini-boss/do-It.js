






// function currentTime() {
//   let date = new Date(); 
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);

//   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;

//   let t = setTimeout(function(){ currentTime() }, 1000);
// }

// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// }
// currentTime();


// let x;
// let startstop = 0;

// function startStop() { 

//   startstop = startstop + 1;

//   if (startstop === 1) {
//     start();
//     document.getElementById("start").innerText = "Stop";
//   } else if (startstop === 2) {
//     document.getElementById("start").innerText = "Start";
//     startstop = 0;
//     stop();
//   }

// }

// function start() {
//   x = setInterval(timer, 1000);
// } 

// function stop() {
//   clearInterval(x);
// } 


// let sec = 0;
// let min = 0;

// let secOut = 0;
// let minOut = 0;



// function timer() {
//   secOut = checkTime(sec);
//   minOut = checkTime(min);
//   sec ++;
//   if (sec == 60) {
//     min = ++min;
//     sec = 0;
//   }
//   document.getElementById("sec").innerText = secOut;
//   document.getElementById("min").innerText = minOut;
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// let maxSecondes = 10;
// let maxMinutes = 10; 



const timer2 = document.getElementById('seconds');

const input = document.getElementById('input');

const btn = document.getElementById('starter');


let time = 0;

const form =document.getElementById('form')


function startTimer(event){
  event.preventDefault()
  time = Number(input.value);

  setInterval(function(){
    time = time -1;
    timer2.innerText = time;
    console.log(timer2)
  
    if(time === 0){
      clearInterval();
      alert("alert");
    }
  }, 1000);
}
form.onsubmit = startTimer

// TRY WITH A "FORM" <DIV> and listen for the "submit" INSTEAD
//ADD THE SOUND WHEN TIMER REACHES 0
/*time = input.value


let tickingTime = time - 1;

function startTimer(){
  const counter = setInterval(function() {
    if (tickingTime === 0) {
        clearInterval(counter);
    }
    
    tickingTime = tickingTime - 1;
    timer2.innerHtml = tickingTime
  }, 1000);
 
}
  console.log(startTimer)

handleSubmit(function(event){
for (let i = input; i>0; i--)

  let avc = event.target.value;
  startTimer();
  
  btn.removeEventListener('submit', handleSubmit)
}); */




/*2. contains a start/stop button with a stopwatch which starts at 00:00 and continues until the user clicks "stop"
3. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0. There should be a sound announcingthe end as well.*/
//3. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0. There should be a sound announcingthe end as well.

//### Make it look "decent"

//Go as crazy as you like. It doesn't need to be complicated, just a little "purty."