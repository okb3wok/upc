import '../scss/index.scss'
import toTop from './toTop.js'
import menuToggle from './menuToggle.js'
import themeSwitcher from './themeSwitcher.js'
import headerSearch from './headerSearch.js'
import order from './order.js'
import preloader from './preloader.js'
import store from './store.js'
import stats from './stats.js'


document.addEventListener('DOMContentLoaded', ()=>{

    store.init();
    preloader.init();
    toTop.init();
    menuToggle.init();
    themeSwitcher.init(store);
    headerSearch.init(store);
    order.init();
    stats.init(store);

});

