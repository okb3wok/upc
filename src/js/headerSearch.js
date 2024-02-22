

export default {
  init(store){

    let headerSearchButton = document.getElementById('header-search-button');

    if (!headerSearchButton) {
      console.log('Нет элемента headerSearchButton');
      return;
    }

    let headerSearchInput = document.getElementById('header-search-input');

    store.setState('isSearching',false);

    let searchingText = store.getState('searchingText');

    headerSearchButton.addEventListener('click', ()=>{

      headerSearchInput.classList.remove('hidden');

      if(searchingText !==undefined){
        headerSearchInput.value = searchingText;
      }

      if(store.getState('isSearchOpen')){

        store.setState('isSearching',true);
        store.setState('isSearchOpen',false);
        headerSearchInput.classList.add('hidden');
        window.location.href = window.origin +'/?s=' + headerSearchInput.value;
         // window.location.replace(window.location.origin +'/?s=' + headerSearchInput.value.replace(' ', '+'));
      }else{
        store.setState('isSearchOpen',true);

        headerSearchInput.focus();
        document.body.addEventListener('click',(el)=>{
          if(headerSearchInput.contains(el.target) || headerSearchButton.contains(el.target)){
          }else{
            store.setState('isSearchOpen',false);
            headerSearchInput.classList.add('hidden');
          }
        });
      }

      headerSearchInput.addEventListener('input',()=>{
        store.setState('searchingText',headerSearchInput.value);
         //.replace(/"/g, '&quot;').replace(/'/g, '&apos;')
      });

      headerSearchInput.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
          store.setState('isSearching',true);
          store.setState('isSearchOpen',false);
          headerSearchInput.classList.add('hidden');
          window.location.href = window.origin +'/?s=' + headerSearchInput.value;
        }

        if(event.key === 'Escape'){
          headerSearchInput.classList.add('hidden');
          store.setState('isSearching',false);
          store.setState('isSearchOpen',false);
        }
      });

       if(window.innerWidth < store.getState('mobileWidth')){
         headerSearchInput.style.width = document.querySelector('header>.wrapper').clientWidth - 145 + 'px';
       }else{
         headerSearchInput.style.width = document.querySelector('header>.wrapper').clientWidth - document.querySelector('.header-branding').clientWidth - 145 + 'px';
       }

    })
  }
}