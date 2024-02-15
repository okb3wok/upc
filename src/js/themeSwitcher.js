export default {
  init(state,store) {

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

    if(state.theme !==undefined){
      document.documentElement.setAttribute('theme', state.theme);

      if(state.theme ==='default-settings' || state.theme ==='no-preference'){

      }else {
        deleteGradient();
      }
    }

    themeSwitcher.addEventListener('click', ()=>{


      if(document.querySelectorAll(".visibility").length < 1){


        let theme = 'default-settings'; //Тема по умолчанию

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

            state = store(state, {theme:theme});
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