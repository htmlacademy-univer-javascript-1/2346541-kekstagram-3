const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 0;
  }
  return Math.floor( Math.random() * (theMax - theMin) + theMin);
};
const checkLengthString = function(textString,lengthInput){
  return String(textString).length >=  lengthInput;
};
export {getRandom,checkLengthString};
