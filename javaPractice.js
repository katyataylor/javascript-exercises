/* example of setting up an interactive element in javascript.*/

// function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
// }

// Number guessing game code below 

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;