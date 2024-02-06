import '../scss/index.scss'
import {initialState} from './initialState.js'



let menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', ()=>{
  menuToggle.classList.toggle('open');
})



let headerSearchButton = document.getElementById('header-search-button');
let headerSearchInput = document.getElementById('header-search-input');
headerSearchButton.addEventListener('click', ()=>{
  headerSearchInput.classList.remove('hidden');

  headerSearchInput.style.width = document.querySelector('.header__nav').clientWidth + 60 + 'px';
})


console.log(initialState);