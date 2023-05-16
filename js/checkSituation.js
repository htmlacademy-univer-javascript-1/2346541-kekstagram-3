import { sendData } from './api.js';
import { alertMessageInPicture } from './alert.js';
import { checkLengthString } from './util.js';
const discriptionCheck = function(){
  const text = document.querySelector('.text__description');
  if(checkLengthString(text.value,20) && (!checkLengthString(text.value,141))){
    return true;
  }else{
    return false;
  }
};
const PictureForm = document.querySelector('.img-upload__form');
PictureForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  if(!discriptionCheck()){
    alertMessageInPicture('discription must between 20~140');
  }else{
    sendData(evt);
  }
});
