const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;
// let fontSizeSmall = 20;

function bigText(){
    //fontSize++;
    fontSize +=5;
    p.style.fontSize = fontSize + 'px';
}

sizeUp.addEventListener('click', bigText );

function smallText(){
    //fontSizeSmall--;
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

sizeDown.addEventListener('click', smallText);

function colorText(){
    p.style.color = 'gold';
}

color.addEventListener('click', colorText );