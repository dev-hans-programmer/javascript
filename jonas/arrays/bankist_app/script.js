'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMomvements = function (movements, sorted = false) {
  containerMovements.innerHTML = '';

  let moves = sorted ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} EUR</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliadCorrected = dogsJulia.slice();
  dogsJuliadCorrected.splice(0, 1);
  dogsJuliadCorrected.splice(-2);

  const dogs = dogsJuliadCorrected.concat(dogsKate);

  dogs.forEach((dog, i) => {
    if (dog > 3) {
      console.log(`Dog number: ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(
        `Dog number: ${i + 1} is a child, and is ${dog} years old.😁`
      );
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const user = 'Hasan Ali Khan';

// Splitting the name by space and taking every first letter of each word and joining them together
const computerUsername = user =>
  user
    .toLowerCase()
    .split(' ')
    .map(item => item[0])
    .join('');

const createUsernames = accounts =>
  accounts.map(account => computerUsername(account.owner));

// looping through all the accounts and adding a new username property for every object: This is called side effect
const addUsernameToAccounts = accounts => {
  accounts.forEach(account => {
    account.username = computerUsername(account.owner);
  });
};
addUsernameToAccounts(accounts);

const calcPrintBalance = account => {
  const totalMovements = account.movements.reduce((acc, move) => acc + move, 0);
  account.balance = totalMovements;
  labelBalance.textContent = `${totalMovements} EUR`;
};

const calcDisplaySummary = (movements, providedInterest) => {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${income} EUR`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, move) => acc + move, 0);

  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * providedInterest) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} EUR`;
};

// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // Find the account
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    console.log('LOGIN SUCCESSFULKLY');
    // Display UI and message
    labelWelcome.textContent = `Welcome, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 1;
    // clear the input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

function updateUI(currentAccount) {
  displayMomvements(currentAccount.movements);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount.movements, currentAccount.interestRate);
}

// transfer account balance
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount?.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);

    updateUI(currentAccount);
  }
});

// close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  const account = accounts.find(acc => acc.username === username);

  if (account?.pin === pin) {
    const accountIndex = accounts.findIndex(acc => acc.username === username);

    if (accountIndex !== -1) {
      accounts.splice(accountIndex, 1);
      containerApp.style.opacity = 0;
    }
  }
});

// btn loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// btn sort
let sorted = false;
btnSort.addEventListener('click', () => {
  displayMomvements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Filter out movements as deposits
const deposits = movements.filter(move => move > 0);
console.log(deposits);
const withdrawls = movements.filter(move => move < 0);
console.log(withdrawls);

// [200, 450, -400, 3000, -650, -130, 70, 1300]

// Max movement
const maxMovement = movements => Math.max(...movements);

// We are comparing every movement to check which one is bigger and eventually returning it
const maxMovementManual = movements =>
  movements.reduce(
    (acc, move) => (acc < move ? (acc = move) : acc),
    movements[0]
  );
console.log(maxMovementManual(account1.movements));

// const totalMovements = movements.reduce((acc, move) => acc + move, 0);
// console.log(totalMovements);

// const names = [
//   {
//     name: 'Jonas Schmedtmann',
//     balance: 1000,
//   },
//   {
//     name: 'Hasan Ali',
//     balance: 4000,
//   },
// ];

// const modifiedNames = names.reduce((acc, name) => {
//   acc.push({ ...name, username: computerUsername(name.name) });
//   return acc;
// }, []);
// console.log(modifiedNames);

// Chaining methods
const totalMovementsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalMovementsInUSD);

// some and every array methods
const numbers = [1, 2, 3, 4, 5];

const isEvenPrsent = numbers.some(p => p % 2 === 0);
console.log(isEvenPrsent);

const areAllBiggerThanZero = numbers.every(p => p > 0);
console.log(areAllBiggerThanZero);

const simpleNestedArray = [1, 2, [3, 2, 1]];
console.log(simpleNestedArray.flat()); //  it works

const deeplyNestedArray = [1, 2, [1, 2, [3, 2, 1, [4, 5]]]];
console.log(deeplyNestedArray.flat()); // it does not work
// hence we have to manually provide the depth level
console.log(deeplyNestedArray.flat(3)); // it works)

// flatMap function
const nestedNumbers = [
  [1, 2, 3],
  [3, 2, 1],
];
const res = nestedNumbers.flatMap(num => num);
console.log(res);

const numbersToBeSorted = [1, 8, 2, 3, 10, 11];
console.log(numbersToBeSorted.sort((a, b) => -a + b));

/////////////////////////////////////////////////
