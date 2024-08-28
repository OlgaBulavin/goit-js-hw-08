
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';


const form = document.querySelector('.js-feedback-form');
const textarea = document.querySelector('.js-feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData), 500);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();

form.elements.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? "";

form.addEventListener("input", (evt) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt.target.value));
})

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        textarea.value = savedMessage;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
