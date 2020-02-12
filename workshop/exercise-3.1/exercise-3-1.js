

const main = document.getElementById('main');


function changeColor(event){
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.add('green')
}

for (let i = 0; i<=20; i++){
const button = document.createElement('button');
button.innerText = i;
button.id = "btn" + i;
main.appendChild(button);

button.addEventListener('click', changeColor);
};

/*# The Events Workshop

## Exercise 3.1 - Buttons!!

Write an app that generates 20 red buttons.

When the user clicks a button it should become green.

I leave the design up to you.
*/