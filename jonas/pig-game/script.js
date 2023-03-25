'use strict';
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentZero = document.querySelector('#current--0');
const currentOne = document.querySelector('#current--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

const dicesMap = {
  1: 'dice-1',
  2: 'dice-2',
  3: 'dice-3',
  4: 'dice-4',
  5: 'dice-5',
  6: 'dice-6',
};

let current = 0;

function generateRandomDiceRoll() {
  return Math.trunc(Math.random() * 6 + 1);
}
function switchPlayer() {
  if (isPlayerZeroActive()) {
    playerZero.classList.remove('player--active');
    playerOne.classList.add('player--active');
  } else {
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
  }
}

function isPlayerZeroActive() {
  return playerZero.classList.contains('player--active');
}

// User Rolls dice: By default player 1
btnRoll.addEventListener('click', function (e) {
  const randomNumber = generateRandomDiceRoll();
  const diceType = dicesMap[randomNumber];
  dice.setAttribute('src', `${diceType}.png`);

  if (randomNumber === 1) {
    current = 0;
    if (isPlayerZeroActive()) currentZero.textContent = current;
    else currentOne.textContent = current;
    // Switch player;
    switchPlayer();
  } else {
    current += randomNumber;
    if (isPlayerZeroActive()) {
      currentZero.textContent = current;
    } else {
      currentOne.textContent = current;
    }
  }
});

btnHold.addEventListener('click', function (e) {
  if (isPlayerZeroActive()) scoreZero.textContent = current;
  else scoreOne.textContent = current;
});

// Reset
btnNew.addEventListener('click', function (e) {
  current = 0;
  scoreZero.textContent = current;
  scoreOne.textContent = current;
  currentZero.textContent = current;
  currentOne.textContent = current;

  if (!isPlayerZeroActive()) {
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
  }
});
