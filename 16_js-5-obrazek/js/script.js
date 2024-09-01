const btnArrow = document.querySelector('.arrow');

const arrowIcon = document.querySelector('.fas');

const item1 = document.querySelector('.item1');

item1.classList.contains('show');

// let checkClass = document.getElementsByClassName('show'); ????

function showImage(){
    item1.classList.toggle('show');

    if(item1.classList.contains('show')){
        arrowIcon.style.transform='rotate(180deg)';
    }
    else{
        arrowIcon.style.transform='rotate(0)';
    }
}

btnArrow.addEventListener('click', showImage);
