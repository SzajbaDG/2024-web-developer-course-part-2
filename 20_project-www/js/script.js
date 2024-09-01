document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('.navbar');

    const navItems = document.querySelector('.navbar-collapse');
    const allNavItems = document.querySelectorAll('.nav-link');

    function addShadow(){
        if(window.scrollY >= 0){
            nav.classList.add('shadow-bg')
        }
        else{
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navItems.classList.remove('show')));

    window.addEventListener('scroll', addShadow);
})
