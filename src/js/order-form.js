//форма заказа
let orderBtns = document.querySelectorAll('.order-btn');
let orderFormCloseBtn = document.querySelector('.order-form__icon-close-wrap');
let orderFormOverlay = document.querySelector('.order-form__overlay');
let orderFormSubmitBtns = document.querySelectorAll('.order-form__submit');
function closeOrderForm(){
  document.body.classList.remove('order-form-view');
}

if(orderBtns){
  orderBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.classList.add('order-form-view');
      })
    }
  )
}
if(orderFormSubmitBtns){
  orderFormSubmitBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        setTimeout(closeOrderForm, 100);;
      })
    }
  )
}
if(orderFormCloseBtn){
  orderFormCloseBtn.addEventListener('click', function(){
    closeOrderForm();
  });
}
if(orderFormOverlay){
  orderFormOverlay.addEventListener('click', function(){
    closeOrderForm();
  });
}


//форма заказа звонка
let callBtns = document.querySelectorAll('.call-btn');
let callFormCloseBtn = document.querySelector('.call-form__icon-close-wrap');
if(callBtns){
  callBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.classList.add('order-form-view-call');
      })
    }
  )
}
if(callFormCloseBtn){
  callFormCloseBtn.addEventListener('click', function(){
    document.body.classList.remove('order-form-view-call');
  });
}
if(orderFormOverlay){
  orderFormOverlay.addEventListener('click', function(){
    document.body.classList.remove('order-form-view-call');
  });
}
