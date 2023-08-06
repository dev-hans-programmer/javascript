console.log('WORKING');
let result = 0.1 + 0.2; // this prints 0.300000000004 which is weird in JS
console.log(result);
console.log(result === 0.3);

// convert string to number
let numInStr = '23';
console.log(Number(numInStr));
console.log(+numInStr);

console.log(Number.parseInt('30px', 10));
console.log(Number.isNaN(+'@@')); // true
console.log(Number.isNaN(20)); // false
console.log(Number.isFinite(20)); // True
console.log(Number.isFinite('20')); // False

// isFinite is the best way to check whether a value is a number or not
const randomInt = (min, max) =>
   Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(1, 10));
console.log(3333344443333444433344433447777777777666555n);
