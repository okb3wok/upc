import '../scss/index.scss'
import {initialState} from './initialState.js'



let menuToggle = document.getElementById('menu-toggle');
let menu = document.querySelector('.header__nav');
menuToggle.addEventListener('click', ()=>{
  menuToggle.classList.toggle('open');
  menu.classList.toggle('extended');

})




let themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', ()=>{


  if(document.querySelectorAll(".visibility").length < 1){
    const visibilityTemplate = document.querySelector("#visibility");
    const clone = visibilityTemplate.content.cloneNode(true);
    document.body.prepend(clone);


    let imgSwitcher = document.getElementById('img-switcher');
    imgSwitcher.addEventListener('change', ()=>{
      let images = document.querySelectorAll('img');
      if(imgSwitcher.checked){
        images.forEach((el)=>{
          el.style.display='block';
        })

      }else{
        images.forEach((el)=>{
          el.style.display='none';
        })
      }
    });


    let buttons = document.querySelectorAll('.visibility button');

    let colorButtons = document.querySelectorAll('.visibility__button.color');

    const handlerVisibility = (el) => {

      let content = document.querySelector('.body');
      const fontSize = getComputedStyle(content).getPropertyValue("--font-size");
      const fontInterval = getComputedStyle(content).getPropertyValue("--letter-spacing");

      // let html = document.documentElement;
      // html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 1 + 'px';
      // console.log(getComputedStyle(html).fontSize);


      //TODO переписать с switch

      if(el.target.classList.contains('font_smaller')){
        content.style.setProperty("--font-size", 'calc(' + fontSize + ' * 0.8)');
      }else if(el.target.classList.contains('font_bigger')){
        content.style.setProperty("--font-size", 'calc(' + fontSize + ' * 1.2)');
      }else if(el.target.classList.contains('font-sans-serif')){
        content.style.setProperty("--font-family", 'Roboto');
      }else if(el.target.classList.contains('font-serif')){
        content.style.setProperty("--font-family", 'Times');
      }else if(el.target.classList.contains('font-interval-smaller')){
        content.style.setProperty("--letter-spacing", 'calc(' + fontInterval + ' * 0.1)');
      }else if(el.target.classList.contains('font-interval-bigger')){
        content.style.setProperty("--letter-spacing", 'calc(' + fontInterval + ' * 2)');
      }

      if(el.target.classList.contains('color')){

        colorButtons.forEach((el)=>{
          el.classList.remove('chose');
        })

        if(el.target.classList.contains('black-on-white')){
          el.target.classList.add('chose');
        }else if(el.target.classList.contains('white-on-black')){
          el.target.classList.add('chose');
        }else if(el.target.classList.contains('navy-on-blue')){
          el.target.classList.add('chose');
        }else if(el.target.classList.contains('green-on-brown')){
          el.target.classList.add('chose');
        }

      }



    }

    buttons.forEach((el)=>{
      el.addEventListener('click', handlerVisibility );

    })



  }else
  {
    document.querySelector(".visibility").remove();
  }


})



let headerSearchButton = document.getElementById('header-search-button');
let headerSearchInput = document.getElementById('header-search-input');
headerSearchButton.addEventListener('click', ()=>{
  headerSearchInput.classList.remove('hidden');

  headerSearchInput.style.width = document.querySelector('.main').clientWidth - 470 + 'px';
})


console.log(initialState);



//---
// To top
//---

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, timeout);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;


    el.style.display = 'none';

};




let toTop = document.getElementById('totop');
window.addEventListener('scroll',(el)=>{
  if (window.scrollY > 220) {
    toTop.classList.replace('hide', 'show');
  }else {
    toTop.classList.replace('show', 'hide');
  }
})

toTop.addEventListener('click',()=>{
  window.scrollTo({top: 0, behavior: 'smooth'});
})