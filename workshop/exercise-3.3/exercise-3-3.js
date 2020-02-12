

const main = document.getElementById('main');


function changeColor(event){
    const buttonId =event.target.id;
    document.getElementById(buttonId).classList.toggle('color')
}
for (let i = 0; i<=20; i++){
   const button = document.createElement('button');
   button.innerText = i;
   button.id = "btn" + i; 
   button.style.top = `${Math.random() * 80}vh`;
   button.style.right = `${Math.random() * 80}vw`;
   main.appendChild(button);

   main.addEventListener('click', changeColor);
}





/*# The Events Workshop

## Exercise 3.3 - Buttons, Here, There, Everywhere!

You can copy the `HTML` file over, but I strongly recommend redoing the JS from scratch without looking at your previous answer as mush as possible.

Building on exercise 3.1 and 3.2, write a program that places 20 buttons in the page that toggle from red to green but this time they are located in random positions on the screen.*/

