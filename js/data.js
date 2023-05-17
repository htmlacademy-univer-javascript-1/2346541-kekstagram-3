import {getRandom} from './util.js';
const creatArray = function(){
  const newArray = [];
  for(let i = 1 ; i <= 25 ;i++){
    const midArray = {id:i,url:`photos/${i}.jpg`,description:`some description for photo${i}`,like:getRandom(15,200),comments:getRandom(0,200)};
    newArray.push(midArray);
  }
  return newArray;
};
const editPictures = function(midArray){
  const picturesToAdd = document.querySelector('.pictures');
  const template = document.querySelector('#picture');
  const content = template.content;
  const documentFlagment = document.createDocumentFragment();

  for(let i = 0; i < midArray.length;i++){
    const copyForInput = content.cloneNode(true);
    copyForInput.querySelector('.picture__img').src = midArray[i].url;
    copyForInput.querySelector('.picture__likes').textContent = midArray[i].likes;
    copyForInput.querySelector('.picture__comments').textContent = midArray[i].comments;
    documentFlagment.append(copyForInput);
  }
  picturesToAdd.appendChild(documentFlagment);
};
export{creatArray , editPictures};
