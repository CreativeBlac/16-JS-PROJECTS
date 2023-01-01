const navbarEl = document.querySelector(".nav-bar-container");
const bottomContianerEl = document.querySelector(".bottom-container");
console.log(bottomContianerEl.offsetTop)
console.log(navbarEl.offsetHeight)

window.addEventListener("scroll", function() {
    if (window.scrollY > bottomContianerEl.offsetTop - navbarEl.offsetHeight) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active")
    }
})