const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const about = document.querySelector('.about');
const advantages = document.querySelector('.advantages');
const procedures = document.querySelector('.procedures');
const contacts = document.querySelector('.contacts');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

about.addEventListener('click', toggleMenu);
advantages.addEventListener('click', toggleMenu);
procedures.addEventListener('click', toggleMenu);
contacts.addEventListener('click', toggleMenu);


