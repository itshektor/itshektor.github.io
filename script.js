var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


