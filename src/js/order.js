export default {
  init(){

    let orderCourseButton = document.getElementById('orderCourse');

    if (!orderCourseButton) {
      console.log('Нет элемента orderCourse');
      return;
    }

    let modal = document.querySelector('.modal');

    orderCourseButton.addEventListener('click', ()=>{
      modal.classList.remove('modal_hidden');
      //document.body.style.top = `-${window.scrollY}px`;
      //document.body.style.position = 'fixed';

    });

    let closeModal = document.querySelector('.modal__close');
    closeModal.addEventListener('click', ()=>{
      modal.classList.add('modal_hidden');
    })


  }
}