// what will be the output?
// console.log(foo);
// foo = 1;
// This will give an error

// 2. What will be the output?
console.log(rock); // it will be printing undefined as var varibales get hoisted with an undefined value
var rock = 2;

// 3. What will be the output?
out = 3;
console.log(out); // it will be printing 3 as the var variable will be hoisted to the top
var out;

// 4. What will be the output?
var num = 5;

function multiply() {
   console.log(num * 2);
   var num = 10;
}

multiply(); // this will print NaN as the num gets hoisted with a value of undefined which we are trying to multiply with 2.
// The local variable gets prioritized first hence the var num = 5 will be ignored here.
