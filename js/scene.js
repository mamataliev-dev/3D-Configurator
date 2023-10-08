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
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('second-blackout')) {
        secondDropDown.classList.remove('open')
        secondBlackout.classList.remove('active')
    }
})


// Products Array
var customArr = [];

// Products Count
var countItems = 0;

// Products Array For My Gallary
var productArr = []

// Options Btns
var optionsBtnSave = document.querySelector('.options-btn-save')
var optionsBtn3d = document.querySelector('.options-btn-3d')
var optionsBtnDownload = document.querySelector('.options-btn-download')
var optionsBtnPrint = document.querySelector('.options-btn-print')
var optionsBtnShare = document.querySelector('.options-btn-share')

// Option Modals
var shareModal = document.querySelector('.share-blackout')
var savedModal = document.querySelector('.saved-modal')
var savedModalBlackout = document.querySelector('.saved-blackout')
var savedModalEmpty = document.querySelector('.saved-modal-empty')
var downloadModalBlackout = document.querySelector('.download-blackout')
var downloadModal = document.querySelector('.download-modal')

// Option Btns Close Modals
var btnCloseShareModal = document.querySelectorAll('.close-share-modal')
var btnCloseSavedModal = document.querySelectorAll('.close-saved-modal')
var btnMoveToGallary = document.querySelector('.check-out-saved-modal')


// Show Order List 
var orderList = document.querySelector('.order__list')
var moveUpBtn = document.querySelector('.move-up')

moveUpBtn.addEventListener('click', () => {
    orderList.classList.toggle('open')
    moveUpBtn.classList.toggle('down')
})


// Show Options Btn Tips 
var optionsBtn = document.querySelectorAll('.options__btn')
var optionsTip = document.querySelectorAll('.options__tip')

optionsBtn.forEach(button => {
    // Show Options Tips
    button.addEventListener('mouseover', (e) => {
        var buttonTarget = e.target
        var buttonAttr = buttonTarget.getAttribute('data-tip')

        optionsTip.forEach(el => {
            var elAttr = el.getAttribute('data-tip')

            if (buttonAttr == elAttr) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })
    })

    // Hide Options Tips
    button.addEventListener('mouseout', (e) => {
        var buttonTarget = e.target
        var buttonAttr = buttonTarget.getAttribute('data-tip')

        optionsTip.forEach(el => {
            var elAttr = el.getAttribute('data-tip')

            if (buttonAttr == elAttr) {
                el.classList.remove('active')
            }
        })
    })
})


btnCloseShareModal.forEach(el => {
    el.addEventListener('click', () => {
        shareModal.classList.remove('active')
    })
})

btnCloseSavedModal.forEach(el => {
    el.addEventListener('click', () => {
        savedModalBlackout.classList.remove('active')
        savedModalEmpty.classList.remove('active')
        savedModal.classList.remove('active')
    })
});

btnMoveToGallary.addEventListener('click', () => {
    window.location.href = '../gallery.html';
})


// Open Options Modal
optionsBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        var buttonTarget = e.target
        var buttonAttr = buttonTarget.getAttribute('data-tip')

        switch (buttonAttr) {
            case 'share':
                shareModal.classList.add('active')
                break;
            case 'save':
                if (customArr.length !== 0) {
                    savedModalBlackout.classList.add('active')
                    savedModal.classList.add('active')
                } else {
                    savedModalBlackout.classList.add('active')
                    savedModalEmpty.classList.add('active')
                }
                break;
            case 'download':
                downloadModalBlackout.classList.add('active')
                downloadModal.classList.add('active')
                break;
            case 'share':
                shareModal.classList.add('active')
                break;
            default:
                break;
        }
    })
});


// Remove All Blackouts From Modals
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('share-blackout') || e.target.classList.contains('saved-blackout') || e.target.classList.contains('download-blackout')) {
        shareModal.classList.remove('active')
        savedModalBlackout.classList.remove('active')
        savedModalEmpty.classList.remove('active')
        savedModal.classList.remove('active')
        downloadModalBlackout.classList.remove('active')
        downloadModal.classList.remove('active')
    }
})


// Custon Item Btns
var customItemBtn = document.querySelectorAll('.custom-item-btn')
var customDropList = document.querySelectorAll('.custom-drop-list')
var customBtn = document.querySelector('.custom-btn')
var removeBtn = document.querySelectorAll('.custom-item-remove')
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


// Custom Objects Chairs
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
        var objectRemoveAttr = objectBtn.getAttribute('data-remove');

        object.forEach((el) => {
            var objectAttr = el.getAttribute('data-object');

            if (objectAttr == objectBtnAttr) {
                el.classList.add('object-visible');
            } else {
                el.classList.remove('object-visible');
            }
        });


        // Remove added products
        removeBtn.forEach(btn => {
            var btnAttr = btn.getAttribute('data-remove')

            if (btnAttr == objectRemoveAttr) {
                btn.classList.add('active')

                btn.addEventListener('click', () => {
                    object.forEach(el => {
                        var elProduct = el.getAttribute('data-product');

                        if (el.classList.contains('object-visible')) {
                            var indexProductArr = productArr.findIndex(item => item.elProduct === elProduct);
                            var indexCustomArr = customArr.findIndex(item => item.elProduct === elProduct);


                            if (indexProductArr !== -1 || indexCustomArr !== -1) {
                                productArr.splice(indexProductArr, 1);
                                customArr.splice(indexCustomArr, 1);
                                countItems--
                            }
                        }

                        el.classList.remove('object-visible');
                        btn.classList.remove('active')
                    })
                })
            }
        })

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
            var existingProductIndexPr = productArr.findIndex(item => item.elProduct === elProduct);

            if (existingProductIndex === -1 || existingProductIndexPr === -1) {
                customArr.push({
                    elProduct,
                    elPrice
                });

                productArr.push({
                    elProduct,
                    elPrice
                })

                countItems++;
            }
        } else {
            var existingItemIndex = customArr.findIndex(item => item.elProduct === elProduct);
            var existingProductIndex = productArr.findIndex(item => item.elProduct === elProduct);

            if (existingItemIndex !== -1 || existingProductIndex !== -1) {
                customArr.splice(existingItemIndex, 1);
                productArr.splice(existingProductIndex, 1);
                countItems--;
            }
        }
    });
}


optionsBtnSave.addEventListener('click', () => {
    pushProductsToSavedModal();
})

document.addEventListener('click', () => {
    pushProductsOrder();
})


// Push Products to Order
function pushProductsOrder() {
    var orderList = document.querySelector('.order__list');
    var orderCount = document.querySelector('.order__count')

    if (customArr.length !== 0) {
        orderList.innerHTML = '';
    }


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


    if (countItems <= 1) {
        orderCount.innerHTML = `${countItems} item`
    } else {
        orderCount.innerHTML = `${countItems} items`
    }

    pushLocalStorage();
}


// Save Products To My Gallary
function pushProductsToSavedModal() {
    var savedModalItems = document.querySelector('.saved-modal__items')
    savedModalItems.innerHTML = '';

    productArr.forEach(item => {
        var product = item.elProduct
        var price = item.elPrice;
        var savedItem = document.createElement('div')

        savedItem.innerHTML = `
        <div class="saved-modal__item d-flex">
            <h5 class="saved-modal__item_title h5">${product} &nbsp;</h5>
            <h5 class="saved-modal__item-price">$${price}</h5>
        </div>
    `

        savedModalItems.appendChild(savedItem)
    })
}


// Push Custom Array to LocalStorage
function pushLocalStorage() {
    var customArrString = JSON.stringify(customArr);

    localStorage.setItem('customArr', customArrString);
}


// Show masks
document.addEventListener("DOMContentLoaded", () => {
    var map = document.querySelector('map')
    var maskWallPanels = document.querySelector('.mask-wall-panels')
    var maskChairs = document.querySelector('.mask-chairs')
    var maskFloor = document.querySelector('.mask-floor')
    var maskLamps = document.querySelector('.mask-lamps')

    map.addEventListener('click', (e) => {
        e.preventDefault();
        var buttonTarget = e.target
        var buttonAtrr = buttonTarget.getAttribute('data-mask')

        switch (buttonAtrr) {
            case 'wall-pattern':
                hideMasks(maskWallPanels, buttonAtrr)
                break;
            case 'chairs':
                hideMasks(maskChairs, buttonAtrr)
                break;
            case 'floor1':
                hideMasks(maskFloor, buttonAtrr)
                break;
            case 'floor2':
                hideMasks(maskFloor, buttonAtrr)
                break;
            case 'lamps':
                hideMasks(maskLamps, buttonAtrr)
                break;
            default:
                break;
        }
    })


    function hideMasks(mask, customMenu) {
        mask.classList.add('active')

        // Remove Masks
        setTimeout(() => {
            mask.classList.remove('active')
        }, 150);


        // Open Custom by button click
        customItemBtn.forEach(button => {
            var buttonAttr = button.getAttribute('data-mask')

            if (buttonAttr == customMenu) {
                button.classList.toggle('open')
            } else {
                button.classList.remove('open')
            }
        })

        customDropList.forEach(el => {
            var listArtt = el.getAttribute('data-mask')

            if (listArtt == customMenu) {
                el.classList.toggle('open')
            } else {
                el.classList.remove('open')
            }
        })

        custom.classList.add('open')
    }
})