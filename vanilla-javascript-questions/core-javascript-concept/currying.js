//  Write a function which helps to achieve multiply(a)(b) and returns product of a and b.

function multiply(a) {
   return function (b) {
      return a * b;
   };
}

console.log(multiply(10)(10));

// Create a curry function
function curry(fn) {
   const arity = fn.length;

   return function f1(...args) {
      if (args.length >= arity) {
         return fn(...args);
      } else {
         return function f2(...moreArgs) {
            const newArgs = args.concat(moreArgs);
            return f1(...newArgs); // recursive calling
         };
      }
   };
}

const curriedSum = curry((a, b, c) => a * b * c);
console.log(curriedSum(1)(2, 8));

// Realtime use case
const get = curry((property, object) => object[property]);
const getId = get('id');
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);

console.log(
   getIds([
      {
         id: 1,
      },
      {
         id: 2,
      },
   ])
);
