const refs = {
    loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

//TODO тут была ошибка, без .value перед trim()
function onLoginFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (!emailValue || !passwordValue) {
        alert('Не всі поля заповнені');
        return;
    }
    console.log({ email: emailValue, password: passwordValue });
    event.target.reset();
}