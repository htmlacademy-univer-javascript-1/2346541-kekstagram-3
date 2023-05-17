const alertMessage = (message) => {
  const time = 5000;
  const alertForm = document.createElement('div');
  alertForm.style.position = 'fixed';
  alertForm.style.top = '20%';
  alertForm.style.left = '10%';
  alertForm.style.right = '10%';
  alertForm.style.fontSize = '50px';
  alertForm.style.textAlign = 'center';
  alertForm.style.color= 'yellow';
  alertForm.textContent = message;

  document.body.append(alertForm);

  setTimeout(() => {
    alertForm.remove();
  }, time);
};
const alertMessageInPicture = (message) => {
  const time = 5000;
  const alertForm = document.createElement('div');
  alertForm.style.position = 'fixed';
  alertForm.style.top = '20%';
  alertForm.style.left = '10%';
  alertForm.style.right = '10%';
  alertForm.style.fontSize = '50px';
  alertForm.style.textAlign = 'center';
  alertForm.style.color= 'yellow';
  alertForm.textContent = message;

  document.querySelector('.img-upload__preview-container').append(alertForm);

  setTimeout(() => {
    alertForm.remove();
  }, time);
};
export {alertMessage,alertMessageInPicture};
