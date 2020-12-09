import itemMenu from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';



const Menumarkup = itemMenu(menu);
// console.log(Menumarkup);

const menuRef = document.querySelector('.js-menu');

// console.log(menuRef);

menuRef.insertAdjacentHTML('afterbegin', Menumarkup);

const checkBoxRef = document.querySelector(".theme-switch__toggle");
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
   DARK: 'dark-theme',
 };


checkBoxRef.addEventListener('change', switchToggle);

function switchToggle(e) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);

    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

function checkTheme() {
    if (localStorage.theme === 'dark-theme') {
        bodyRef.classList.add(Theme.DARK);
    } else  {
        bodyRef.classList.add(Theme.LIGHT);
    }
};

checkTheme();

