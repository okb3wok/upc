import '../scss/index.scss'
import { initialState } from './initialState.js'
import toTop from './toTop.js'
import menuToggle from './menuToggle.js'
import themeSwitcher from './themeSwitcher.js'
import headerSearch from './headerSearch.js'
import order from './order.js'



document.addEventListener('DOMContentLoaded', ()=>{
    toTop.init();
    menuToggle.init();
    themeSwitcher.init();
    headerSearch.init();
    order.init();
});

