const containerEl = document.querySelector(".image-container");

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage() {
    containerEl.style.opacity = 1 - window.pageYOffset / 900;
    containerEl.style.backgroundSize = 160 - window.pageYOffset / 18 + "%";
}