export default {
  init(){

    let headerSearchButton = document.getElementById('header-search-button');

    if (!headerSearchButton) {
      console.log('Нет элемента headerSearchButton');
      return;
    }

    let headerSearchInput = document.getElementById('header-search-input');
    headerSearchButton.addEventListener('click', ()=>{
      headerSearchInput.classList.remove('hidden');

      headerSearchInput.style.width = document.querySelector('.main').clientWidth - 470 + 'px';
    })

  }
}