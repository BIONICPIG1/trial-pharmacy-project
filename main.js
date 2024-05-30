const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registerbox = document.querySelector('.form-box-register')

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    registerbox.classList.remove('hidden')
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});
