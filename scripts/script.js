const menu = document.querySelector('nav h4');
const menuLinks = document.querySelector('nav ul');
const body = document.querySelector('body');


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);