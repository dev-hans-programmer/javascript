const arr = ['a', 'b', 'c', 'd'];

// arr.splice(0, 1);
console.log(arr.splice(0, 2)); // Returns the deleted items
console.log(arr);

// The new at method
const nums = [1, 2, 3];
// Get last element
console.log(nums.at(-1));

const names = ['Has', 'Rai'];
names.forEach((name, idx) => console.log(`${idx}:${name}`));

// for each with maps and sets
const questionsMap = new Map([
   ['1', 'what is your name?'],
   ['2', 'Where are you?'],
]);
questionsMap.forEach((item, key, wholeMap) => console.log(item, key, wholeMap));

const currencies = new Set(['INR', 'USD', 'USD', 'EUR']);
currencies.forEach((curr) => console.log(curr)); // It does not have any key
