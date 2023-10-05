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


// Options Btns
var optionsBtnSave = document.querySelector('.options-btn-save')
var optionsBtn3d = document.querySelector('.options-btn-3d')
var optionsBtnDownload = document.querySelector('.options-btn-download')
var optionsBtnPrint = document.querySelector('.options-btn-print')
var optionsBtnShare = document.querySelector('.options-btn-share')


// Tips
var tipSave = document.querySelector('.tip-save')
var tip3d = document.querySelector('.tip-3d')
var tipDownload = document.querySelector('.tip-download')
var tipPrint = document.querySelector('.tip-print')
var tipShare = document.querySelector('.tip-share')


// Option Modals
var closeShareModal = document.querySelectorAll('.close-share-modal')
var shareModal = document.querySelector('.share-blackout')
var savedModal = document.querySelector('.saved-blackout')
var savedModalEmpty = document.querySelector('.saved-modal-empty')
var savedModal = document.querySelector('.saved-modal')
var closeSavedModal = document.querySelectorAll('.close-saved-modal')
var checkOutSavedModal = document.querySelector('.check-out-saved-modal')
var downloadModal = document.querySelector('.download-blackout')


// Show Order List 
var orderList = document.querySelector('.order__list')
var moveUpBtn = document.querySelector('.move-up')

moveUpBtn.addEventListener('click', () => {
    orderList.classList.toggle('open')
    moveUpBtn.classList.toggle('down')
})


// Close Share Modal
// closeShareModal.forEach((e) => {
//     e.addEventListener('click', () => {
//         blackout.classList.remove('active')
//     })
// })

// Close Saved Modal
// closeSavedModal.forEach(element => {
//     element.addEventListener('click', () => {
//         savedBlackout.classList.remove('active')
//     })
// });

// Move to My Gallary
// checkOutSavedModal.addEventListener('click', () => {
//     window.location.href = '../gallery.html';
// })

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


// Show Options Modal
optionsBtn.forEach(button => {
    // Open Options Modal
    button.addEventListener('click', (e) => {
        var buttonTarget = e.target
        var buttonAttr = buttonTarget.getAttribute('data-tip')

        switch (buttonAttr) {
            case 'share':
                shareModal.classList.add('active')
                break;
            case 'save':
                savedModal.classList.add('active')
                break;
            case 'download':
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
    if (e.target.classList.contains('share-blackout') || e.target.classList.contains('saved-blackout') || e.target.classList.contains('download-modal-blackout')) {
        shareModal.classList.remove('active')
        savedModal.classList.remove('active')
        savedModalEmpty.classList.remove('saved-modal-active')
        downloadModal.classList.remove('open')
    }
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

        const group = objectBtn.getAttribute('data-object');

        if (group) {
            countItems++;
        }

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


if (customArr.length !== 0) {
    var empty = document.querySelector('.order__list-text-empty')
    empty.style = "display: none"
}

// Push Products to Order
function pushProductOrder() {
    var orderList = document.querySelector('.order__list');
    var orderCount = document.querySelector('.order__count')
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

        orderCount.innerHTML = countItems
        orderList.appendChild(itemElement);
    });

    pushLocalStorage();
}


// Push Custom Array to LocalStorage
function pushLocalStorage() {
    var customArrString = JSON.stringify(customArr);

    localStorage.setItem('customArr', customArrString);
}

// Add Products to Save To My Gallary
function addProductSaveModal() {
    item.innerHTML = `
    <div class="saved-modal__item">
        <h5 class="saved-modal__item_title h5">Content</h5>
        <span class="saved-modal__item_desc">Content</span>
    </div>
`
}


// Show masks
var wallPatternArea = document.querySelector('.wall-pattern-area')
var kitchenFartukMask = document.querySelector('.kitchen-fartuk-mask')



wallPatternArea.addEventListener('click', () => {
    kitchenFartukMask.classList.add('active')

    setTimeout(() => {
        kitchenFartukMask.classList.remove('active')
    }, 150);
})