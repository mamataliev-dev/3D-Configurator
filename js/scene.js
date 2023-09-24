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

// Scene 
var optionsBtnSave = document.querySelector('.options-btn-save')
var optionsBtn3d = document.querySelector('.options-btn-3d')
var optionsBtnDownload = document.querySelector('.options-btn-download')
var optionsBtnPrint = document.querySelector('.options-btn-print')
var optionsBtnShare = document.querySelector('.options-btn-share')
var orderList = document.querySelector('.order__list')
var moveUpBtn = document.querySelector('.move-up')
var customItemBtnWallPatter = document.querySelector('.custom-item-btn-wall-patter')
var customItemBtnFloor = document.querySelector('.custom-item-btn-floor')
var customItemBtnObjects = document.querySelector('.custom-item-btn-objects')
var customBtn = document.querySelector('.custom-btn')
var custom = document.querySelector('.custom')

customBtn.addEventListener('click', () => {
    if (custom.classList.contains('open')) {
        custom.classList.remove('open')
        customBtn.classList.remove('down')
    } else {
        custom.classList.add('open')
        customBtn.classList.add('down')
    }
})

moveUpBtn.addEventListener('click', () => {
    if (moveUpBtn.classList.contains('down')) {
        orderList.classList.remove('open')
        moveUpBtn.classList.remove('down')
    } else {
        orderList.classList.add('open')
        moveUpBtn.classList.add('down')
    }
})

customItemBtnWallPatter.addEventListener('click', () => {
    if (customItemBtnWallPatter.classList.contains('down')) {
        customItemBtnWallPatter.classList.remove('down')
    } else {
        customItemBtnWallPatter.classList.add('down')
    }
})

customItemBtnFloor.addEventListener('click', () => {
    if (customItemBtnFloor.classList.contains('down')) {
        customItemBtnFloor.classList.remove('down')
    } else {
        customItemBtnFloor.classList.add('down')
    }
})

customItemBtnObjects.addEventListener('click', () => {
    if (customItemBtnObjects.classList.contains('down')) {
        customItemBtnObjects.classList.remove('down')
    } else {
        customItemBtnObjects.classList.add('down')
    }
})


optionsBtnSave.addEventListener('click', () => {
    console.log('asd')
})

optionsBtn3d.addEventListener('click', () => {
    console.log('asd')
})

optionsBtnDownload.addEventListener('click', () => {
    console.log('asd')
})

optionsBtnPrint.addEventListener('click', () => {
    console.log('asd')
})

optionsBtnShare.addEventListener('click', () => {
    console.log('asd')
})