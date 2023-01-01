const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    bodyEl.appendChild(spanEl)
})