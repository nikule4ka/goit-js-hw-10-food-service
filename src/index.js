import itemMenu from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';
// import './js/menu';


const Menumarkup = itemMenu(menu);
// console.log(Menumarkup);

const menuRef = document.querySelector('.js-menu');

// console.log(menuRef);

menuRef.insertAdjacentHTML('afterbegin', Menumarkup);