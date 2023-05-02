const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    console.error('диапазон может быть только положительный, значение «theMin»необхотимо меньшее, чем значение «theMax»');
    return 0;
  };
  return theMax + Math.random() * (theMax - theMin);
}
const checkLengthString = function(textString,lengthInput){
  return textString.length >=  lengthInput;
};
