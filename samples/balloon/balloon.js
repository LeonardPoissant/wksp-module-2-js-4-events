// event listener that listens for a keydown event
const button = document.getElementById('balloon');

let balloonSize = 12; 
balloon.style.fontSize = `${balloonSize}px`

const MIN_SIZE = 6;
const INCREMENT = 2; 

const MAX_SIZE = 100;

const MAX_EXPLOSION_SIZE = 1000;

function handleKeyDown (event){
 // CONSOLE"LOG TO CHECK ALONG THEY WAY
if (event.key === 'ArrowUp'){
    if (balloonSize){
        balloonSize += INCREMENT;
        balloon.style.fontSize = `${balloonSize}px`;
    if (balloonSize > MAX_SIZE){
 document.removeEventListener('keydown', handleKeyDown);
 
 balloon.innerText = '💥';
  
 const explosion = setInterval(function(){
     balloonSize +=1; 
     balloon.style.fontSize = `${balloonSize}px`;

     if (balloonSize > MAX_EXPLOSION_SIZE){
         clearInterval(explosion)
     }
     balloon.style.opacity = 0;
 }, 30);
}
}   

} else if (event.key === 'ArrowDown'){
    
    // if 'arrow down'
    if (balloonSize > MIN_SIZE){
        balloonSize -= INCREMENT; 
        balloon.style.fontSize= `${balloonsSize}px`;
    }
    ///if ballon  is z bigger than Z
      //ballon smaller
    
    }
    };

  
    // if 'arrow up'
  // grow the balloon bigger
  // if balloon is bigger than x
      // remove event listener because the balloon makes place to the explosion 
     // remove the balloon / add in explosion 
     // explosion grows incrementely
         // if the explosion size = y
            // stop growing
               // fadeout









      
  document.addEventListener('keydown', handleKeyDown);

  //ALWAYS ADD EVENT LISTENER AT THE END OF THE CODE

