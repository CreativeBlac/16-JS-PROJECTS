const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
checkEl()

function checkEl() {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white"
    }
}

inputEl.addEventListener("input", () => {
    checkEl();
    localstorage();
})

function localstorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}