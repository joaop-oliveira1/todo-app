var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function handleContactSubmit(event) {
    event.preventDefault();
    var formData = new FormData(contactForm);
    fetch("/", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(response => response.json())
        .then(console.log)
        .catch(error => console.error(error))
})