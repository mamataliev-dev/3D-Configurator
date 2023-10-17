// Drop Dwon List
var secondNavBtn = document.querySelector(".second-nav-btn");
var secondDropDown = document.querySelector(".second-nav-drop-down");
var secondBlackout = document.querySelector(".second-blackout");

secondNavBtn.addEventListener("click", () => {
  secondDropDown.classList.add("open");
  secondBlackout.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("second-blackout")) {
    secondDropDown.classList.remove("open");
    secondBlackout.classList.remove("active");
  } else {
    console.log();
  }
});

// Open Request Modal
var requestCloseBtn = document.querySelectorAll(".request-close-btn");
var requestBlackout = document.querySelector(".request-blackout");
var contactFormSendBtn = document.querySelector(".contact-form-send-btn");

contactFormSendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  requestBlackout.classList.add("active");
  console.log("asdasdsa");
});

requestCloseBtn.forEach((element) => {
  element.addEventListener("click", () => {
    requestBlackout.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("request-blackout")) {
    requestBlackout.classList.remove("active");
  } else {
    console.log();
  }
});
