const scoreRate = document.getElementById('score');
const inputBtn = document.getElementById('input');
const submitBtn = document.getElementsByClassName('submit');
const questions = document.getElementById('question')
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

scoreRate.innerText = `score:${score}`

const num1 = Math.ceil(Math.random() * 11);
const num2 = Math.ceil(Math.random() * 11);
questions.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAnswer = num1 * num2;

const form = document.getElementById('form');
form.addEventListener('submit', function() {
    const userAnswer = +inputBtn.value;
    if (userAnswer === correctAnswer) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }

})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}