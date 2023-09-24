// Swiper Carousel
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


// Drop Down List
var mynavDropDown = document.querySelector('.mynav-drop-down')
var userBtn = document.querySelector('.user-btn')
var blackout = document.querySelector('.blackout')
var secondBlackout = document.querySelector('.second-blackout')
var secondNavBtn = document.querySelector('.second-nav-btn')
var secondDropDown = document.querySelector('.second-nav-drop-down')

secondNavBtn.addEventListener('click', () => {
    secondDropDown.classList.add('open')
    secondBlackout.classList.add('active')
})

userBtn.addEventListener('click', () => {
    mynavDropDown.classList.add('open')
    blackout.classList.add('active')
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout')) {
        blackout.classList.remove('active')
        mynavDropDown.classList.remove('open')
    } else {
        console.log();
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('second-blackout')) {
        secondDropDown.classList.remove('open')
        secondBlackout.classList.remove('active')
    } else {
        console.log();
    }
})

// Chat Modal
var chatBtnClose = document.querySelector('.chat-popup-btn-close')
var chat = document.querySelector('.chat-popup')
var openChatBtn = document.querySelector('.open-chat-btn')
var blackoutWhite = document.querySelector('.blackout-white')
var chatSendBtn = document.querySelector('.chat-popup-send-btn')

chatSendBtn.addEventListener('click', (e) => e.preventDefault())

openChatBtn.addEventListener('click', () => {
    chat.classList.add('open')
    blackoutWhite.classList.add('active')
})

chatBtnClose.addEventListener('click', (e) => {
    e.preventDefault();
    chat.classList.remove('open')
    blackoutWhite.classList.remove('active')
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout-white')) {
        blackoutWhite.classList.remove('active')
        chat.classList.remove('open')
    } else {
        console.log();
    }
})