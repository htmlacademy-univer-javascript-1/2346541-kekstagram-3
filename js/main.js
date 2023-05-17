const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 0;
  }
  return Math.floor( Math.random() * (theMax - theMin) + theMin);
};
const checkLengthString = function(textString,lengthInput){
  return textString.length >=  lengthInput;
};
const creatArray = function(){
  const newArray = [];
  for(let i = 1 ; i <= 25 ;i++){
    const midArray = {id:i,url:`photos/${i}.jpg`,description:`some description for photo${i}`,like:getRandom(15,200),comments:getRandom(0,200)};
    newArray.push(midArray);
  }
  return newArray;
};
// eslint-disable-next-line no-console
console.log(getRandom(15,20));
// eslint-disable-next-line no-console
console.log(checkLengthString('abcd',2));
// eslint-disable-next-line no-console
console.log(creatArray());

