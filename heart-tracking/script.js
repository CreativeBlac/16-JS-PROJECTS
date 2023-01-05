const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    const randomEl = Math.random() * 100;
    spanEl.style.width = randomEl + "px";
    spanEl.style.height = randomEl + "px";
    bodyEl.appendChild(spanEl)

    setTimeout(() => {
        spanEl.remove()
    }, 3000)
})