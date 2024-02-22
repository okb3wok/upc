import './classList.js' // for ie11

const preloader = {

  el: null,
  transition: 1000,

  init (){
    this.el = document.querySelector('#preloader');
    this.preloaderHide();
  },

  preloaderHide(transition = this.transition) {

    //const { el:preloader } = this; //TODO To think

    const preloader = this.el;

    if (!preloader) return;


    preloader.classList.replace('show', 'hide');

    setTimeout(() => {
      //preloader.remove(); // for other
      preloader.parentNode.removeChild(preloader); // for ie11


      if(window.navigator.userAgent.indexOf('MSIE ') > -1 ||
        window.navigator.userAgent.indexOf('Trident/') > -1){
        document.body.insertAdjacentHTML('afterbegin','<div class="ie">\n' +
          '  <div class="ie__wrapper">\n' +
          '    Внимение! Вы используете устаревший браузер Internet Explorer. Для работы с сайтом откройте его в современном браузере (например Firefox, Chrome, Edge и др.) \n' +
          '  </div>\n' +
          '</div>');
      }

    }, transition);

  }

}


export default preloader;