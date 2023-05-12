import {creatArray} from './data.js';
import './upPicture.js';
const picturesToAdd = document.querySelector('.pictures');
const template = document.querySelector('#picture');
const content = template.content;
const documentFlagment = document.createDocumentFragment();
const midArray = creatArray();
for(let i = 0; i < midArray.length;i++){
  const copyForInput = content.cloneNode(true);
  copyForInput.querySelector('.picture__img').src = midArray[i].url;
  copyForInput.querySelector('.picture__likes').textContent = midArray[i].like;
  copyForInput.querySelector('.picture__comments').textContent = midArray[i].comments;
  documentFlagment.append(copyForInput);
}
picturesToAdd.appendChild(documentFlagment);


