import { requestAPI } from './requestApi.js'
import { EMAIL_REGEXP, PHONE_REGEXP } from './const.js'
import { mask } from './mask.js'

export default {
  init(){

    let orderCourseButton = document.getElementById('orderCourse');

    if (!orderCourseButton) {
      console.log('Нет элемента orderCourse');
      return;
    }

    let modal = document.querySelector('.modal');
    orderCourseButton.addEventListener('click', ()=>{
      // document.body.style.top = `-${window.scrollY}px`;
      // document.body.style.position = 'fixed';
      modal.classList.remove('modal_hidden');

      modal.addEventListener('click',(el)=>{

        let modalContainer = document.querySelector('.modal__container');
        if(modalContainer.contains(el.target)){

        }else{
          modal.classList.add('modal_hidden');
        }

      });


    });


    let orderEmail = document.getElementById('orderEmail');
    let orderPhone = document.getElementById('orderPhone');
    let orderDescription = document.getElementById('orderDescription');
    let orderMsg = document.getElementById('orderMsg');

    mask("orderPhone");





    let orderSendButton = document.getElementById('orderSend');

    orderSendButton.addEventListener('click',()=>{


      const isPhoneValid = (value) => {
        return PHONE_REGEXP.test(value.replace(/[\s#\-)(]/g, ''));
      }

      const isEmailValid = (value) => {
        return EMAIL_REGEXP.test(value);
      }

      let msg = '';


      if(isPhoneValid(orderPhone.value) && isEmailValid(orderEmail.value)){
        msg = '<i style="color: green;">Отправляем...</i>';
        orderMsg.innerHTML = msg;

        let payload = {
          data: {
            method: 'sendEmail',
            request: {
              email: orderEmail.value,
              phone: orderPhone.value,
              descr: orderDescription.value,
            }
          }
        };

        requestAPI('https://upc.aviaavtomatika.ru/wp-content/themes/upc/api.php','POST',payload).then(
          (result) => {
            if(result.result){
              msg = '<i style="color: green;">' + result.status + '</i>';
              orderMsg.innerHTML = msg;
            }else {
              msg = '<i style="color: red;">' + result.status + '</i>';
              orderMsg.innerHTML = msg;
            }
          });


      }else{

        msg = '<i style="color: red;">Не верные данные</i>';
        orderMsg.innerHTML = msg;

        if(!isEmailValid(orderEmail.value)){
          orderEmail.style.borderColor = 'red';
        }
        if(!isPhoneValid(orderPhone.value)){
          orderPhone.style.borderColor = 'red';
        }

        // Вешаем обработчики

        // Обработчик Телефона
        orderPhone.addEventListener('input',onPhoneInput)
        function onPhoneInput() {
          let entered = this.value;
          if (isPhoneValid(entered)) {
            orderPhone.style.borderColor = 'green';
            // msg.show = false;
            // orderMsg(msg);
          }else{
            orderPhone.style.borderColor = 'red';
          }
        }

        // Обработчик Емайл
        orderEmail.addEventListener('input',onEmailInput);
        function onEmailInput() {
          let entered = this.value;
          if (isEmailValid(entered)) {
            orderEmail.style.borderColor = 'green';
            // msg.show = false;
            // orderMsg(msg);
          }else{
            orderEmail.style.borderColor = 'red';
          }
        }


      }




    })

    let closeModal = document.querySelector('.modal__close');
    closeModal.addEventListener('click', ()=>{
      modal.classList.add('modal_hidden');
    })


  }
}
