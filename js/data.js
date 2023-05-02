import {getRandom} from './util.js';
const creatArray = function(){
  const newArray = [];
  for(let i = 1 ; i <= 25 ;i++){
    const midArray = {id:i,url:`photos/${i}.jpg`,description:`some description for photo${i}`,like:getRandom(15,200),comments:getRandom(0,200)};
    newArray.push(midArray);
  }
  return newArray;
};
export{creatArray};
