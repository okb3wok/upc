export default {

  init(store) {

    let themeSwitcher = document.getElementById('theme-switcher');


    const deleteGradient = () =>{
      document.querySelector('.bubble1').style.display = 'none';
      document.querySelector('.bubble2').style.display = 'none';
      document.querySelector('.header-branding__logo svg :nth-child(2) path').style.fill='var(--meta-color)';
      document.querySelector('.header-branding__logo svg :nth-child(3) path').style.fill='var(--meta-color)';
    }

    if (!themeSwitcher) {
      console.log('Нет элемента themeSwitcher');
      return;
    }


    let theme = store.getState('theme');

    if( theme!==undefined){
      document.documentElement.setAttribute('theme', theme);

      if(theme ==='default-settings' || theme ==='no-preference'){
      }else {
        deleteGradient();
      }
    }

    let content = document.querySelector('.body');

    let multFontSize = store.getState('fontSize');
    if(multFontSize!==undefined){
      const fontSize = getComputedStyle(content).getPropertyValue("--font-size");
      content.style.setProperty("--font-size", 'calc(' + fontSize + ' * ' + multFontSize + ')');
    }


    let neededFontFamily = store.getState('fontSerif');
    if(neededFontFamily==="sans-serif"){
      content.style.setProperty("--font-family", 'Roboto');
    }else if(neededFontFamily==="serif"){
      content.style.setProperty("--font-family", 'Times');
    }


    let multFontInterval = store.getState('fontInterval');
    if(multFontInterval!==undefined){
      const fontInterval = getComputedStyle(content).getPropertyValue("--line-height");
      content.style.setProperty("--line-height", 'calc(' + fontInterval + ' * ' + multFontInterval + ')');
    }

    let multFontKerning = store.getState('fontKerning');
    if(multFontKerning!==undefined){
      const fontKerning = getComputedStyle(content).getPropertyValue("--letter-spacing");
      content.style.setProperty("--letter-spacing", 'calc(' + fontKerning + ' * ' + multFontKerning + ')');
    }


    let images = document.querySelectorAll('img');
    if(store.getState('photo')){
      images.forEach((el)=>{
        el.style.display='block';
      })
    }else {
      images.forEach((el)=>{
        el.style.display='none';
      })
    }

    themeSwitcher.addEventListener('click', ()=>{

      if(document.querySelectorAll(".visibility").length < 1){


        const visibilityTemplate = document.querySelector("#visibility");
        const clone = visibilityTemplate.content.cloneNode(true);
        document.body.prepend(clone);


        let imgSwitcher = document.getElementById('img-switcher');

        imgSwitcher.checked=store.getState('photo')?store.getState('photo'):!store.getState('photo');

        imgSwitcher.addEventListener('change', ()=>{
          let images = document.querySelectorAll('img');
          if(imgSwitcher.checked){
            store.setState('photo', true);
            images.forEach((el)=>{
              el.style.display='block';
            })
          }else{
            store.setState('photo', false);
            images.forEach((el)=>{
              el.style.display='none';
            })
          }
        });


        let buttons = document.querySelectorAll('.visibility button');

        let colorButtons = document.querySelectorAll('.visibility__button.color');



        const handlerVisibility = (el) => {




          const fontKerning = getComputedStyle(content).getPropertyValue("--letter-spacing");
          const fontInterval = getComputedStyle(content).getPropertyValue("--line-height");
          // let html = document.documentElement;
          // html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 1 + 'px';
          // console.log(getComputedStyle(html).fontSize);

          const fontSize = getComputedStyle(content).getPropertyValue("--font-size");




          if(el.target.classList.contains('font_smaller') || el.target.parentElement.classList.contains('font_smaller')){
            content.style.setProperty("--font-size", 'calc(' + fontSize + ' * 0.8)');
            store.setState('fontSize', store.getState('fontSize') * 0.8);
          }else if(el.target.classList.contains('font_bigger') || el.target.parentElement.classList.contains('font_bigger')){
            content.style.setProperty("--font-size", 'calc(' + fontSize + ' * 1.25)');
            store.setState('fontSize', store.getState('fontSize') * 1.25);
          }else if(el.target.classList.contains('font-sans-serif') || el.target.parentElement.classList.contains('font-sans-serif')){
            content.style.setProperty("--font-family", 'Roboto');
            store.setState('fontSerif','sans-serif');
          }else if(el.target.classList.contains('font-serif') || el.target.parentElement.classList.contains('font-serif')){
            content.style.setProperty("--font-family", 'Times');
            store.setState('fontSerif','serif');
          }else if(el.target.classList.contains('font-kerning-smaller') || el.target.parentElement.classList.contains('font-kerning-smaller')){
            content.style.setProperty("--letter-spacing", 'calc(' + fontKerning + ' * 0.2)');
            store.setState('fontKerning', store.getState('fontKerning') * 0.2);
          }else if(el.target.classList.contains('font-kerning-bigger') || el.target.parentElement.classList.contains('font-kerning-bigger')){
            content.style.setProperty("--letter-spacing", 'calc(' + fontKerning + ' * 5)');
            store.setState('fontKerning', store.getState('fontKerning') * 5);
          }else if(el.target.classList.contains('font-interval-smaller') || el.target.parentElement.classList.contains('font-interval-smaller')){
            content.style.setProperty("--line-height", 'calc(' + fontInterval + ' * 0.8)');
            store.setState('fontInterval', store.getState('fontInterval') * 0.8);
          }else if(el.target.classList.contains('font-interval-bigger') || el.target.parentElement.classList.contains('font-interval-bigger')){
            content.style.setProperty("--line-height", 'calc(' + fontInterval + ' * 1.25)');
            store.setState('fontInterval', store.getState('fontInterval') * 1.25);
          }

          if(el.target.classList.contains('color')){

            colorButtons.forEach((el)=>{
              el.classList.remove('chose');

              deleteGradient();
            })

            if(el.target.classList.contains('default-settings')){
              theme = 'default-settings';
              el.target.classList.add('chose');
              document.querySelector('.bubble1').style.display = 'block';
              document.querySelector('.bubble2').style.display = 'block';
              document.querySelector('.header-branding__logo svg :nth-child(2) path').style.fill='url(#gradient1)';
              document.querySelector('.header-branding__logo svg :nth-child(3) path').style.fill='url(#gradient2)';
            }else if(el.target.classList.contains('black-on-white')){
              theme = 'black-on-white';
              el.target.classList.add('chose');
            }else if(el.target.classList.contains('white-on-black')){
              theme = 'white-on-black';
              el.target.classList.add('chose');
            }else if(el.target.classList.contains('navy-on-blue')){
              theme = 'navy-on-blue';
              el.target.classList.add('chose');
            }else if(el.target.classList.contains('green-on-brown')){
              theme = 'green-on-brown';
              el.target.classList.add('chose');
            }

            store.setState('theme', theme);
            document.documentElement.setAttribute('theme', theme);
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
  }
}