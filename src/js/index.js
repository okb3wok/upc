import '../scss/index.scss'
import { initialState } from './initialState.js'
import toTop from './toTop.js'
import menuToggle from './menuToggle.js'
import themeSwitcher from './themeSwitcher.js'
import headerSearch from './headerSearch.js'
import order from './order.js'
import preloader from './preloader.js'




document.addEventListener('DOMContentLoaded', ()=>{

    preloader.init();


    let state = {};

    const store = (state, newPair) => {
        localStorage.upc = JSON.stringify({...state, ...newPair});
        console.log({...state, ...newPair});
        return JSON.parse(localStorage.upc);
    }


    if(localStorage.upc!== undefined){
        state = JSON.parse(localStorage.upc);
    }else{
        state = initialState;
        localStorage.upc = JSON.stringify({...state, rehydrated:true});
    }


    toTop.init();
    menuToggle.init();
    themeSwitcher.init(state, store);
    headerSearch.init(state, store);
    order.init();



});

