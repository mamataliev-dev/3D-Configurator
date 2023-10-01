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

moveUpBtn.addEventListener('click', () => {
    if (moveUpBtn.classList.contains('down')) {
        orderList.classList.remove('open')
        moveUpBtn.classList.remove('down')
    } else {
        orderList.classList.add('open')
        moveUpBtn.classList.add('down')
    }
})


// Options Btns
var optionsBtnSave = document.querySelector('.options-btn-save')
var optionsBtn3d = document.querySelector('.options-btn-3d')
var optionsBtnDownload = document.querySelector('.options-btn-download')
var optionsBtnPrint = document.querySelector('.options-btn-print')
var optionsBtnShare = document.querySelector('.options-btn-share')

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


// Custon Item Btns
var customItemBtn = document.querySelectorAll('.custom-item-btn')
var customDropList = document.querySelectorAll('.custom-drop-list')
var customBtn = document.querySelector('.custom-btn')
var custom = document.querySelector('.custom')
var lastClickedButton = null;

customItemBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        var btn = e.target;
        var buttonAttr = btn.getAttribute('data-item');

        customDropList.forEach(el => {
            var listAttr = el.getAttribute('data-item')
            if (buttonAttr == listAttr) {
                el.classList.toggle('open')
            } else {
                el.classList.remove('open')
            }
        })

        button.classList.toggle('open');

        if (lastClickedButton && lastClickedButton !== button) {
            lastClickedButton.classList.remove('open');
        }

        lastClickedButton = button;

    });
});


customBtn.addEventListener('click', () => {
    custom.classList.toggle('open')
})


// Products Array
var customArr = [];

// Custom Objects Bar Stools
var objectBarStoolsBtn = document.querySelectorAll('.object-bar-stool-btn');
var barStoolsImg = document.querySelectorAll('.bar-stool-img');

objectBarStoolsBtn.forEach(button => {
    customObjectsHandler(button, barStoolsImg)
})

// Custom Objects Lamps
var objectLamp = document.querySelectorAll('.object-lamp-btn');
var lampImg = document.querySelectorAll('.lamp-img');

objectLamp.forEach(button => {
    customObjectsHandler(button, lampImg)
})

// Custom Objects Fartuk 
var objectFartukBtn = document.querySelectorAll('.object-fartuk-btn')
var fartukImg = document.querySelectorAll('.fartuk-img')

objectFartukBtn.forEach(button => {
    customObjectsHandler(button, fartukImg)
})

// Custom Objects Portuquet
var objectParquetBtn = document.querySelectorAll('.object-parquet-btn')
var portuquetImg = document.querySelectorAll('.portuquet-img')

objectParquetBtn.forEach(button => {
    customObjectsHandler(button, portuquetImg)
})


// Custom Objects Handler
function customObjectsHandler(button, object) {
    button.addEventListener('click', (e) => {
        var objectBtn = e.target;
        var objectBtnAttr = objectBtn.getAttribute('data-object');

        object.forEach((el) => {
            var objectAttr = el.getAttribute('data-object');

            if (objectAttr == objectBtnAttr) {
                el.classList.add('object-visible');
            } else {
                el.classList.remove('object-visible');
            }
        });

        checkObjectProduct(object);
    });
}


// Check Object Product
function checkObjectProduct(product) {
    product.forEach(el => {
        var elProduct = el.getAttribute('data-product');
        var elPrice = el.getAttribute('data-price');

        if (el.classList.contains('object-visible')) {
            var existingProductIndex = customArr.findIndex(item => item.elProduct === elProduct);

            if (existingProductIndex === -1) {
                customArr.push({
                    elProduct,
                    elPrice
                });
            }
        } else {
            var existingProductIndex = customArr.findIndex(item => item.elProduct === elProduct);

            if (existingProductIndex !== -1) {
                customArr.splice(existingProductIndex, 1);
            }
        }
    });

    pushProductOrder();
}


// Push Products to Order
function pushProductOrder() {
    var orderList = document.querySelector('.order__list');
    orderList.innerHTML = '';

    customArr.forEach((item) => {
        var product = item.elProduct;
        var price = item.elPrice;
        var itemElement = document.createElement('div');

        itemElement.innerHTML = `
            <div class="order__item d-flex flex-column">
                <span class="order__item_title">${product}</span>
                <span class="order__item_price">$${price}</span>
            </div>
        `;

        orderList.appendChild(itemElement);
    });

    pushLocalStorage();
}


// Push Custom Array to LocalStorage
function pushLocalStorage() {
    var customArrString = JSON.stringify(customArr);

    localStorage.setItem('customArr', customArrString);
}