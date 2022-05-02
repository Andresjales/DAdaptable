/* Barra de navegación */

let menuToggle = document.querySelector('.menu_toggle');
let menuToggleIcon = document.querySelector('.menu_toggle i');
let menu = document.getElementById('nav_menu');

menuToggle.addEventListener('click', e=>{
    menu.classList.toggle('show');
});