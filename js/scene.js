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
var orderList = document.querySelector('.order__list')
var moveUpBtn = document.querySelector('.move-up')

// Options Btns
var optionsBtnSave = document.querySelector('.options-btn-save')
var optionsBtn3d = document.querySelector('.options-btn-3d')
var optionsBtnDownload = document.querySelector('.options-btn-download')
var optionsBtnPrint = document.querySelector('.options-btn-print')
var optionsBtnShare = document.querySelector('.options-btn-share')

// Custon Item Btns
var customItemBtnWallPatter = document.querySelector('.custom-item-btn-wall-patter')
var customItemBtnFloor = document.querySelector('.custom-item-btn-floor')
var customItemBtnObjects = document.querySelector('.custom-item-btn-objects')
var customBtn = document.querySelector('.custom-btn')
var custom = document.querySelector('.custom')

// Option Drop-Down Lists
var customFloorList = document.querySelector('.custom-floor-list')
var customObjectsList = document.querySelector('.custom-objects-list')
var customWallPatternList = document.querySelector('.custom-wall-pattern-list')

// Show Tips
var tipSave = document.querySelector('.tip-save')
var tip3d = document.querySelector('.tip-3d')
var tipDownload = document.querySelector('.tip-download')
var tipPrint = document.querySelector('.tip-print')
var tipShare = document.querySelector('.tip-share')

customItemBtnWallPatter.addEventListener('click', () => {
    if (customFloorList.classList.contains('open') || customObjectsList.classList.contains('open')) {
        customFloorList.classList.remove('open')
        customObjectsList.classList.remove('open')

        customWallPatternList.classList.toggle('open')
    } else {
        customWallPatternList.classList.toggle('open')
    }
})

customItemBtnFloor.addEventListener('click', () => {
    if (customWallPatternList.classList.contains('open') || customObjectsList.classList.contains('open')) {
        customWallPatternList.classList.remove('open')
        customObjectsList.classList.remove('open')

        customFloorList.classList.toggle('open')
    } else {
        customFloorList.classList.toggle('open')
    }
})

customItemBtnObjects.addEventListener('click', () => {
    if (customWallPatternList.classList.contains('open') || customFloorList.classList.contains('open')) {
        customWallPatternList.classList.remove('open')
        customFloorList.classList.remove('open')

        customObjectsList.classList.toggle('open')
    } else {
        customObjectsList.classList.toggle('open')
    }
})


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


// Show Share Modal
var closeShareModal = document.querySelectorAll('.close-share-modal')
var blackout = document.querySelector('.share-blackout')
var savedBlackout = document.querySelector('.saved-blackout')
var closeSavedModal = document.querySelectorAll('.close-saved-modal')
var checkOutSavedModal = document.querySelector('.check-out-saved-modal')
var downloadModalBlackout = document.querySelector('.download-modal-blackout')
var downloadModal = document.querySelector('.download-modal')

optionsBtnSave.addEventListener('click', () => {
    savedBlackout.classList.add('active')
})

optionsBtnDownload.addEventListener('click', () => {
    downloadModalBlackout.classList.add('active')
    downloadModal.classList.add('open')
})

optionsBtnShare.addEventListener('click', () => {
    blackout.classList.add('active')
})

closeShareModal.forEach((e) => {
    e.addEventListener('click', () => {
        blackout.classList.remove('active')
    })
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('share-blackout') || e.target.classList.contains('saved-blackout') || e.target.classList.contains('download-modal-blackout')) {
        blackout.classList.remove('active')
        savedBlackout.classList.remove('active')
        downloadModalBlackout.classList.remove('active')
        downloadModal.classList.remove('open')
    } else {
        console.log();
    }
})

closeSavedModal.forEach(element => {
    element.addEventListener('click', () => {
        savedBlackout.classList.remove('active')
    })
});

checkOutSavedModal.addEventListener('click', () => {
    window.location.href = '../gallery.html';
})

optionsBtnSave.addEventListener('click', () => {
    tipSave.classList.add('active')
})



// Options Btn Save
optionsBtnSave.addEventListener('mouseover', () => {
    tipSave.classList.add('active')
})

optionsBtnSave.addEventListener('mouseout', () => {
    tipSave.classList.remove('active')
})


// Options Btn Download
optionsBtnDownload.addEventListener('mouseover', () => {
    tipDownload.classList.add('active')
})

optionsBtnDownload.addEventListener('mouseout', () => {
    tipDownload.classList.remove('active')
})


// Options Btn Share
optionsBtnShare.addEventListener('mouseover', () => {
    tipShare.classList.add('active')
})

optionsBtnShare.addEventListener('mouseout', () => {
    tipShare.classList.remove('active')
})


// Options Btn 3D
optionsBtn3d.addEventListener('mouseover', () => {
    tip3d.classList.add('active')
})

optionsBtn3d.addEventListener('mouseout', () => {
    tip3d.classList.remove('active')
})


// Options Btn Print
optionsBtnPrint.addEventListener('mouseover', () => {
    tipPrint.classList.add('active')
})

optionsBtnPrint.addEventListener('mouseout', () => {
    tipPrint.classList.remove('active')
})