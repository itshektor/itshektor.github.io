var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const typed = new Typed('.multiple',{

    strings: ['Programmer', 'Frontend Developer', 'Student'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

