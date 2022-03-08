var contactForm = document.querySelector('#contact-form');
const state = {
    loading: false,
    form: {
        email: getTextFieldById('email'),
        name: getTextFieldById('name'),
        message: getTextFieldById('message'),
        button: document.querySelector('#submit-contact')
    }
}

contactForm.addEventListener('submit', async function handleContactSubmit(event) {
    event.preventDefault();
    mutateAllToLoading()
    var formData = new FormData();
    var values = getAllTextFieldValues();
    formData.append('form-name', 'contact');
    values.forEach(function appendToFormData(payload) {
        formData.append(payload.key, payload.value)
    })
    await sendContactForm(formData)
    mutateAllToNormal();
})

function getAllTextFieldValues() {
    const fieldNames = Object.keys(state.form)
        .filter(function filterButton(fieldName) {
            // fieldName => fieldName !== 'button'
            return fieldName !== 'button'
        });
    return fieldNames.map(function mapThroughValues(fieldName) {
        return {
            key: fieldName,
            value: getTextFieldValue(fieldName)
        };
    })
}

function getTextFieldValue(name) {
    return state.form[name].value
}

function mutate(key, value) {
    state[key] = value;
}

function mutateAllToLoading() {
    var formKeys = Object.keys(state.form)
    mutate('loading', true)
    contactForm.setAttribute('data-state', 'loading')
    formKeys.forEach(function setToLoading(key) {
        state.form[key].setAttribute('data-state', 'loading')
        state.form[key].setAttribute('disabled', true)
    })
}

function mutateAllToNormal() {
    var formKeys = Object.keys(state.form)
    mutate('loading', false)
    contactForm.setAttribute('data-state', 'idle')
    formKeys.forEach(function setToLoading(key) {
        state.form[key].setAttribute('data-state', 'idle')
        state.form[key].removeAttribute('disabled')
    })
}

function getTextFieldById(name) {
    return document.querySelector(`#${name}-field`)
}

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time * 1000)
    })
}

async function sendContactForm(formData) {
    await fetch("/", {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    })
}