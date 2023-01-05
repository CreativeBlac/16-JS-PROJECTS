const kitsEl = [
    "crash",
    "kick",
    "snare",
    "tom"
];
const containerEl = document.querySelector(".container")

kitsEl.forEach(kitsEl => {
    const btnEl = document.createElement("button");
    btnEl.style.backgroundImage = "url(" + kitsEl + ".png)"
    containerEl.appendChild(btnEl);
    btnEl.classList.add("btn");
    btnEl.innerText = kitsEl;
    btnEl.style.textTransform = "capitalize";

    const audioEl = document.createElement("audio");
    audioEl.src = kitsEl + ".mp3";
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kitsEl.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(0.9)"
            setTimeout(() => {
                btnEl.style.transform = "scale(1)"
            }, 100)
        }
    })
});