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


var retrievedArrayOfObjects = JSON.parse(localStorage.getItem('customArr'));
var galleryGrid = document.querySelector('.gallery__grid');

if (retrievedArrayOfObjects && retrievedArrayOfObjects.length > 0) {
    for (let i = 0; i < retrievedArrayOfObjects.length; i++) {
        var gridItem = document.createElement('div');
        gridItem.className = "gallery__item";

        var image = document.createElement('img');
        image.className = "gallery__img mb-2";
        image.src = "./img/scene-bg.jpg";
        image.alt = "Kitchen";
        gridItem.appendChild(image);

        var galleryCont = document.createElement('div');
        galleryCont.className = "gallery__cont";

        var h3 = document.createElement('h3');
        h3.className = "gallery__item_title mb-3";
        h3.textContent = "Kitchen";
        galleryCont.appendChild(h3);

        retrievedArrayOfObjects.forEach(el => {
            var productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <span class="gallery__accessors_title">${el.elProduct}</span>
        `
            galleryCont.appendChild(productDiv);
        });

        var btn = document.createElement('button');
        btn.className = "gallery__btn";
        btn.textContent = "Check out";
        galleryCont.appendChild(btn);

        gridItem.appendChild(galleryCont);
        galleryGrid.appendChild(gridItem);
    }

} else {
    console.log('customArr is empty');
}