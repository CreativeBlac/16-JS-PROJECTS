const containerEL = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerelement = document.createElement("div");
    colorContainerelement.classList.add("color-container")

    containerEL.appendChild(colorContainerelement)

}

const containerEls = document.querySelectorAll(".color-container");

function generateColor() {
    containerEls.forEach(containerEL => {
        const newColorCode = colorCode();
        containerEL.style.backgroundColor = "#" + newColorCode;
        containerEL.innerText = "#" + newColorCode;
    });
}
generateColor();

function colorCode() {
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let color = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber + 1);

    };
    return color;
}
colorCode();