export default {

  init(){
    let menuToggle = document.getElementById('menu-toggle');

    if (!menuToggle) {
      console.log('Нет элемента menuToggle');
      return;
    }

    let menu = document.querySelector('.header__nav');
    menuToggle.addEventListener('click', ()=>{
      menuToggle.classList.toggle('open');
      menu.classList.toggle('extended');
    })
  }
}