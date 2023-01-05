const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".previous");
const imageContainer = document.querySelector(".slider-container");
const imgEl = document.querySelectorAll("img");
let timeOut;
let currentImg = 1;
nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})

function updateImg() {
    if (currentImg > imgEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgEl.length;
    }
    imageContainer.style.transform = `translateX(-${ (currentImg-1)*500}px)`;
    timeOut = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000)
}

updateImg();

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut)
    updateImg();
})