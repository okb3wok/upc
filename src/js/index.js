import '../scss/index.scss'
import { initialState } from './initialState.js'
import toTop from './toTop.js'
import menuToggle from './menuToggle.js'
import themeSwitcher from './themeSwitcher.js'
import headerSearch from './headerSearch.js'
import order from './order.js'



document.addEventListener('DOMContentLoaded', ()=>{


    const store = (state, newPair) => {
        localStorage.upc = JSON.stringify({...state, ...newPair});
        console.log({...state, ...newPair});
        return JSON.parse(localStorage.upc);
    }


    let state = initialState;
    if(localStorage.upc!== undefined){
        state = JSON.parse(localStorage.upc);
    }else{
        localStorage.upc = JSON.stringify({...state, rehydrated:true});
    }



    toTop.init();
    menuToggle.init();
    themeSwitcher.init();
    headerSearch.init(state, store);
    order.init();



});

