const mainEl = document.querySelector(".main-container");
const bgBtn = document.querySelector(".btn");

const popEl = document.querySelector(".popup-container");
const closeEl = document.querySelector(".close-icon");
const popupBtn = document.querySelector(".popup-btn");

bgBtn.addEventListener("click", () => {
    mainEl.classList.add("active");
    popEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
    popEl.classList.add("active");
    mainEl.classList.remove("active");
});