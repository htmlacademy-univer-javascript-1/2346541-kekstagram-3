import {creatArray} from './data.js';
import './upPicture.js';
const picturesToAdd = document.querySelector('.pictures');
const template = document.querySelector('#picture');
const content = template.content;
const documentFlagment = document.createDocumentFragment();
const testArray = creatArray();
for(let i = 0; i < testArray.length;i++){
  const copyForInput = content.cloneNode(true);
  copyForInput.querySelector('.picture__img').src = testArray[i].url;
  copyForInput.querySelector('.picture__likes').textContent = testArray[i].like;
  copyForInput.querySelector('.picture__comments').textContent = testArray[i].comments;
  documentFlagment.append(copyForInput);
}
// eslint-disable-next-line no-console
console.log(documentFlagment);
//to test the number and the out put of pictures
picturesToAdd.appendChild(documentFlagment);


