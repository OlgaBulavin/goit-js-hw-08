
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';
const submit = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];


const form = document.querySelector('.js-feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData), 500);

populateForm();

function onFormSubmit(evt) {
    evt.preventDefault();

    const {
        elements: {email, message},
    } = evt.currentTarget;
    
  const result = {email: email.value, message: message.value};
   evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY, JSON.stringify(submit));
}

function onFormInput(evt) {
    const message = evt.currentTarget.value;
 
    localStorage.setItem(STORAGE_KEY, message);
}
 
function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        refs.form.value = savedMessage;
    }
}

