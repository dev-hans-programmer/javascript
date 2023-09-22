function addFive(a) {
   return a + 5;
}
function subtractTwo(a) {
   return a - 2;
}
function multiplyFour(a) {
   return a * 4;
}

// right to left
function compose(fn1, fn2, fn3) {
   return (arg) => {
      let result = fn1.call(this, arg);
      result = fn2.call(this, result);
      return fn3.call(this, result);
   };
}

function compose(...functions) {
   return (arg) => functions.reduceRight((arg, fn) => fn(arg), arg);
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
