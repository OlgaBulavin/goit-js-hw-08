
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';
const submit = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

const formData = {
  email: '',
  message: '',
};


const form = document.querySelector('.js-feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData), 500);

refs.form.addEventListener('input', evt => {
    formData[evt.target.email] = evt.target.message;
})
populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY, JSON.stringify(submit));
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    const message = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        refs.form.value = savedMessage;
    }
}

