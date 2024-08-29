
import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    input: document.querySelector('input'),
};

const formData = {};

refs.form.addEventListener('input', throttle(onInputData), 500);
refs.form.addEventListener('submit', onFormSubmit);


populateTextarea();


refs.form.addEventListener("input", (evt) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt.target.value));
})

refs.form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    evt.currentTarget.reset();
    const objJSON = JSON.parse(localStorage.getIte(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
});

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value;
    const dataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, dataJSON);
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}

