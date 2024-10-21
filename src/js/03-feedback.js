
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.js-feedback-form');
form.addEventListener('input', throttle(onInputData), 500);
form.addEventListener('submit', onSubmit);
populateTextarea;

const  { email, message } = form;

function onSubmit (evt) {
    evt.preventDefault();

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
      }

    evt.target.reset();
    const objJSON = JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
}

function onInputData(evt) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if(savedMessage) {
        console.log(savedMessage);
        form.value = savedMessage;
    }
}