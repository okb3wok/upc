

export default {
  init(state, store){

    let headerSearchButton = document.getElementById('header-search-button');

    if (!headerSearchButton) {
      console.log('Нет элемента headerSearchButton');
      return;
    }

    let headerSearchInput = document.getElementById('header-search-input');

    state = store(state, {isSearchOpen:false});

    headerSearchButton.addEventListener('click', ()=>{
      headerSearchInput.classList.remove('hidden');

      if(state.searchingText !==undefined){
        headerSearchInput.value = state.searchingText;
      }

      state = store(state, {isSearching:false});

      if(state.isSearchOpen){
        state = store(state, {isSearching:true});
        state = store(state, {isSearchOpen:false});
        headerSearchInput.classList.add('hidden');

      }else{
        state = store(state, {isSearchOpen:true});
        headerSearchInput.focus();
      }


      headerSearchInput.addEventListener('input',()=>{
        state = store(state, {searchingText:headerSearchInput.value}); //.replace(/"/g, '&quot;').replace(/'/g, '&apos;')
      });


      headerSearchInput.addEventListener('keydown',(event)=>{

        if(event.key === 'Enter'){
          state = store(state, {isSearching:true});
          state = store(state, {isSearchOpen:false});
          headerSearchInput.classList.add('hidden');
        }

        if(event.key === 'Escape'){
          headerSearchInput.classList.add('hidden');
          state = store(state, {isSearching:false});
          state = store(state, {isSearchOpen:false});
        }
      });


       if(window.innerWidth < state.mobileWidth){
         headerSearchInput.style.width = document.querySelector('header>.wrapper').clientWidth - 145 + 'px';
       }else{
         headerSearchInput.style.width = document.querySelector('header>.wrapper').clientWidth - document.querySelector('.header-branding').clientWidth - 145 + 'px';
       }

    })
  }
}