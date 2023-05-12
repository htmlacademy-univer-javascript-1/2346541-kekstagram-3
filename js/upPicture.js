const uplordPicture = document.querySelector('#upload-file');
const cancelUplord = document.querySelector('#upload-cancel');
const overlay = document.querySelector('.img-upload__overlay');

const refresh = function(){
  uplordPicture.value = '';
  document.querySelector('text__');
};
const closeInterface = function(){
  document.body.classList.remove('modal-open');
  overlay.classList.add('hidden');
  refresh();
};
const pushESC = function(evt){
  if(evt.key === 'Escape'){
    closeInterface();
    document.removeEventListener('keydown',pushESC);
    refresh();
  }
};
const openInterface = function(){
  document.addEventListener('keydown',pushESC);
  document.body.classList.add('modal-open');
  overlay.classList.remove('hidden');
};
uplordPicture.addEventListener('click',openInterface);
cancelUplord.addEventListener('click',closeInterface);
