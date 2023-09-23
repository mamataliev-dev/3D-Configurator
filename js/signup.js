// Sign Up 
var signUpInput = document.querySelector('.signup__input')
var signUpBtn = document.querySelector('.signup__btn')
var confirmation = document.querySelector('.confirmation')
var signUp = document.querySelector('.signup')

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (signUpInput.value == '') {
        console.log('Empty Value');
    } else if (signUpInput.value == 1) {
        confirmation.classList.add('active')
        signUp.classList.add('hide')
    }
})