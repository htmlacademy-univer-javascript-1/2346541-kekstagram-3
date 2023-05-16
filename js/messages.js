import { closeInterface } from './upPicture.js';
const tmpSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const tmpError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const body = document.querySelector('body');
const valueSize = document.querySelector('.scale__control--value');
const previewPath = document.querySelector('.img-upload__preview');

const showSuccessMessage = function(){
  const theButton = tmpSuccess.querySelector('.success__button');
  document.body.append(tmpSuccess);
  theButton.addEventListener('click', closeSuccess);
  theButton.addEventListener('keydown', pushEscSuccess);
  document.body.addEventListener('click', closeSuccess);
  closeInterface();
};

function closeSuccess(){
  const theButtonInside = document.querySelector('.success__button');
  body.removeChild(tmpSuccess);
  body.removeEventListener('keydown',pushEscSuccess);
  theButtonInside.removeEventListener('click',closeSuccess);
  valueSize.value = `${100}%`;
  previewPath.classList = '';
  previewPath.style.transform = `scale(${  100/100 })`;
}
function pushEscSuccess(evt){
  if (evt === 'Escape') {
    closeSuccess();
    document.removeEventListener('keydown', pushEscSuccess);
  }
}
const showErrorMessage = function(){
  const theButton = tmpError.querySelector('.error__button');
  document.body.append(tmpError);
  theButton.addEventListener('click', closeError);
  theButton.addEventListener('keydown', pushEscError);
  document.body.addEventListener('click', closeError);
  closeInterface();
};

function closeError(){
  const theButtonInside = document.querySelector('.error__button');
  body.removeChild(tmpError);
  body.removeEventListener('keydown',pushEscError);
  theButtonInside.removeEventListener('click',closeError);
}
function pushEscError(evt){
  if (evt === 'Escape') {
    closeError();
    document.removeEventListener('keydown', pushEscError);
  }
}
export{showSuccessMessage,showErrorMessage};
