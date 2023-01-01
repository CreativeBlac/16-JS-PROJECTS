const textArea = document.getElementById('text-area');
const totalCounter = document.getElementById('total-counter');
const remaining = document.getElementById('remaining-counter');
textArea.addEventListener("keyup", () => {
    updateCounter()
});
updateCounter()

function updateCounter() {
    totalCounter.innerText = textArea.value.length;
    remaining.innerText = textArea.getAttribute("max-length") - textArea.value.length;
}