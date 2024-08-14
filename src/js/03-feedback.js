
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';
const submit = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
const formData = {};

const refs = {
    form:document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput), 500);

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
    const message = evt.target.value;
    const stringData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringData);
   
}

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        refs.textarea.value = saveMessage;
    }
}
