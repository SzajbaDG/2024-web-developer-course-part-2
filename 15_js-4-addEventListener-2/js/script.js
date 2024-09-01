const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const color = document.querySelector('.color');
const removeColor = document.querySelector('.remove-color');

function redColor(){
    color.classList.add('red');
    color.classList.remove('blue');

    // color.classList.toggle('red');
}
function blueColor(){
    color.classList.add('blue');
    color.classList.remove('red');

    // color.classList.toggle('blue');
}
function deleteColor(){
    color.classList.remove('red', 'blue');
}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);
removeColor.addEventListener('click', deleteColor);