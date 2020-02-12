

const main =document.getElementById('main');


function changeColor(event){
    const buttonId =event.target.id;
    document.getElementById(buttonId).classList.toggle('color')
}
for (let i = 0; i<=20; i++){
   const button = document.createElement('button')
   button.innerText = i;
   button.id = "btn" + i; 
   main.appendChild(button);

   main.addEventListener('click', changeColor);
}