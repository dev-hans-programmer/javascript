'use strict';

let magicNumber = Math.trunc(Math.random() * 20) + 1;
// elements
const number = document.querySelector('.number');
number.textContent = magicNumber;

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');

function displayMessage(msg) {
  message.textContent = msg;
}

let scorePoint = 20;
let highscorePoint = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) message.textContent = '⛔ No number';
  else if (guess == magicNumber) {
    if (scorePoint > highscorePoint) highscorePoint = scorePoint;
    highscore.textContent = highscorePoint;
    document.body.style.background = 'green';
    displayMessage('Correct Number');
  } else if (guess !== magicNumber) {
    if (scorePoint > 1) {
      displayMessage(guess > magicNumber ? 'Too high!' : 'Too low!');
      score.textContent = scorePoint--;
    } else {
      displayMessage('You lost the game!');
      score.textContent = scorePoint;
    }
  }
});

again.addEventListener('click', function () {
  scorePoint = 20;
  score.textContent = scorePoint;
  guess.value = '';
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.background = '#222';
  number.textContent = magicNumber;
});
