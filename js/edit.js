import { alertMessageInPicture } from './alert.js';
const buttonSmall = document.querySelector('.scale__control--smaller');
const valueSize = document.querySelector('.scale__control--value');
const previewPath = document.querySelector('.img-upload__preview');

function makeSizeSmaller(){
  let midSizeValue = Number(valueSize.value.replace('%',''));
  if(midSizeValue > 25){
    midSizeValue -=  25;
    valueSize.value = `${midSizeValue}%`;
    previewPath.style.transform = `scale(${  midSizeValue/100 })`;
  }else{
    alertMessageInPicture('size can not less than 25');
  }
}
buttonSmall.addEventListener('click',makeSizeSmaller);

const buttonBig = document.querySelector('.scale__control--bigger');


function makeSizeBigger(){
  let midSizeValue = Number(valueSize.value.replace('%',''));
  if(midSizeValue <= 75){
    midSizeValue +=  25;
    valueSize.value = `${midSizeValue}%`;
    previewPath.style.transform = `scale(${  midSizeValue/100 })`;
  }else{
    alertMessageInPicture('size can not more than 100');
  }
}

buttonBig.addEventListener('click',makeSizeBigger);
const radios = document.querySelectorAll('.effects__radio');
function addListenerRadios(){
  for(let i = 0; i <= radios.length - 1;i++){
    radios[i].addEventListener('click',()=> {
      previewPath.classList = '';
      previewPath.classList.add(`effects__preview--${radios[i].value}`);
    });
  }
}
addListenerRadios();
