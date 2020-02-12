const container= document.getElementById('container');
const menu = document.getElementById('menu');
const instructions = document.getElementById('instructions');
const game = document.getElementById('game');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');
const signal = document.getElementById('signal');
const prize = document.getElementById('prize');
const results = document.getElementById('results');
const ANIMATION_TIME = 2000;
const players = { p1, p2 };
const scores = { p1: p1Score, p2: p2Score };
const sounds = {
  signal: new Audio('./sounds/signal.mp3'),
  prize: new Audio('./sounds/prize.mp3'),
  lose: new Audio('./sounds/lose.mp3'),
  bg: new Audio('./sounds/bg.mp3'),
  win: new Audio('./sounds/win.mp3'),
};

function hide(element) {
  element.style.display = 'none';
}

function show(element) {
  element.style.display = 'block';
}
function showInstructions() {
  hide(menu);
  show(instructions);
}

function closeInstructions() {
  show(menu);
  hide(instructions);
}

function keyboardListener(event) {
  if (event.key === 'q') {
    handlePlayerInput('p1');
  }
  if (event.key === 'p') {
    handlePlayerInput('p2');
  }
}

function start() {
  wins = [];
  hide(menu);
  show(game);
  container.style['align-items'] = 'flex-end';

  startCountdown();
}

function playSound(sound) {
  sounds.bg.pause();
  sounds.win.pause();
  sounds[sound].currentTime = 0;
  sounds[sound].play();
}

let signalTimeout;
function startCountdown() {
  playSound('bg');
  won = false;
  ready = false;
  document.addEventListener('keydown', keyboardListener);
  signalTimeout = setTimeout(() => {
    playSound('signal');
    signal.appendChild(createSignal());
    prize.style.display = 'inline-block';
    ready = true;
  }, Math.random() * 4000 + 2000);
}
function createSignal() {
  const signalWrapper = document.createElement('div');
  signalWrapper.style.position = 'absolute';
  signalWrapper.style.top = Math.random() * (innerHeight - 100) + 'px';
  signalWrapper.style.left = Math.random() * (innerWidth - 100) + 'px';
  signalWrapper.style.transform = `rotate(${Math.random() * 360}deg)`;
  const signalImg = document.createElement('img');
  signalImg.classList.add('signal');
  signalImg.src = './imgs/signal.png';
  signalWrapper.appendChild(signalImg);
  return signalWrapper;
}
let wins = []
let won = false;
let ready = false;
function handlePlayerInput(){
  let opp;
  if(player === 'p1'){
   opp === 'p1'
} else{
    opp === 'p2'
  }
  document.removeEventListener('keydown', keyboardListener);

  if(!ready){
    clearTimeout(signalTimeout);
    playSound('lose');
    addWin(opp)
    doAfterAnimation(() => winRound(opponent));
  }

    else if (!won) {
      won = true;
      players[player].src = `./imgs/${player}run.gif`;
      players[player].classList.add(`${player}-move`);
      doAfterAnimation(() => {
        playSound('prize'); 
        doAfterAnimation(() => {
          players[player].classList.remove(`${player}-move`);
          winRound(player); 
        });
      });
    }
}
function doAfterAnimation(){}
function winRound(){}

