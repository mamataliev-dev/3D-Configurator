// * Swiper Carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Open | Close Sign Up Modal
var signInBtn = document.querySelector('.sign-in-btn')
var signInModal = document.querySelector('.signin')
var signInClose = document.querySelector('.sign-in-close')
var blackout = document.querySelector('.blackout')
var signInSubmit = document.querySelector('.sign-in-submit')
var signInEmail = document.querySelector('.sign-in-email')
var signInPassword = document.querySelector('.sign-in-password')

signInClose.addEventListener('click', () => {
    signInModal.classList.remove('open')
    blackout.classList.remove('active')
})

signInBtn.addEventListener('click', () => {
    signInModal.classList.add('open')
    blackout.classList.add('active')
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout')) {
        blackout.classList.remove('active')
        signInModal.classList.remove('open')
    } else {
        console.log();
    }
})

signInSubmit.addEventListener('click', () => {
    window.location.href = '../user.html';
})

// Open Sign Up Modal
var signUpBtn = document.querySelector('.sign-up-btn')


signUpBtn.addEventListener('click', () => {
    window.location.href = '../signup.html';
})