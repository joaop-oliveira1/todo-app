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
    await wait(5);
    var formData = new FormData(contactForm);
    await sendContactForm(formData)
    mutateAllToNormal();
})

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
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
}