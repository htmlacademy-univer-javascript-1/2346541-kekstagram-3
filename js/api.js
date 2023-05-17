import { showSuccessMessage,showErrorMessage } from './messages.js';
import { editPictures } from './data.js';
import { alertMessage } from './alert.js';
function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => editPictures(response))
    .catch(() => alertMessage('error in the process of download data'));
}
function sendData(evt) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        showSuccessMessage();
      } else {
        showErrorMessage();
        alertMessage('fail to upload');
      }
    })
    .catch(() => {
      alertMessage('fail to upload');
    });
}
export {getData,sendData};
