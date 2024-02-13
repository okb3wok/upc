export default {

  init () {

    const toTop = document.getElementById('totop');

    if (!toTop) {
      console.log('Нет элемента ToTop');
      return;
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 220) {
        toTop.classList.replace('hide', 'show');
      }
      else {
        toTop.classList.replace('show', 'hide');
      }
    })

    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })

  }

}