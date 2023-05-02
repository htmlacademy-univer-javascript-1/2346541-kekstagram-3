const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 0;
  }
  return theMax + Math.random() * (theMax - theMin);
};
const checkLengthString = function(textString,lengthInput){
  return textString.length >=  lengthInput;
};
export{getRandom,checkLengthString};
