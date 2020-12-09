import itemMenu from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';

const refs = {
    menu: document.querySelector('.js-menu'),
    checkBox: document.querySelector(".theme-switch__toggle"),
    body: document.querySelector('body')
}

const Menumarkup = itemMenu(menu);
refs.menu.insertAdjacentHTML('afterbegin', Menumarkup);


const Theme = {
  LIGHT: 'light-theme',
   DARK: 'dark-theme',
 };

refs.checkBox.addEventListener('change', switchToggle);

function switchToggle(e) {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);

    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

function checkTheme() {
    if (localStorage.theme === 'dark-theme') {
        refs.body.classList.add(Theme.DARK);
        refs.checkBox.checked = true;
    } else  {
        refs.body.classList.add(Theme.LIGHT);
    }
};

checkTheme();

