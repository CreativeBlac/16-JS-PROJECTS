const containerEl = document.querySelector(".container");
const careers = [
    "Freelancer",
    "Front-end Developer",
    "Programmer",
    "Student"
];
let careerIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
    charIndex++;
    containerEl.innerHTML = `<h1>I am A ${careers[careerIndex].slice(0,charIndex)}</h1>
    `;
    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
};