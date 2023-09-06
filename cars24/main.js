// Implicit binding and explicit binding
var obj = {
   name: 'Hasan',
   display: function () {
      console.log(this.name);
   },
};

var obj1 = {
   name: 'Ali',
};

// What will be the output?
obj.display.call(obj1); // it will print 'Ali' as we are providing a different object as the context

// 2.What will be the output?
var obj = {
   name: 'Hasan',
   display: () => {
      console.log(this.name);
   },
};

var obj1 = {
   name: 'Ali',
};

obj.display.call(obj1); // nothing will be printed as arrow function is referring to the window object

// 3. Implement a caching /memoize function
const memoizedClumsySqauare = (fn) => {
   let cache = new Map();
   return (...args) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) return cache.get(key);
      // calcuate the result then set it in cache
      const result = fn(...args);
      cache.set(key, result);
      return result;
   };
};

const clumsySquare = (num1, num2) => {
   for (let i = 1; i <= 10000000000; i++) {}
   return num1 * num2;
};

console.time('First Call');
const memoizedSqauare = memoizedClumsySqauare(clumsySquare);
console.log(memoizedSqauare(2345, 4321));
console.timeEnd('First Call');

console.time('Second Call');
console.log(memoizedSqauare(2345, 4321));
console.timeEnd('Second Call');

// Output based question on event loop
console.log('a');
setTimeout(() => console.log('Set'), 0);
Promise.resolve(() => {
   for (let i = 1; i <= 100000; i++) {}
   console.log('pro');
}).then((res) => {
   console.log(res);
});
console.log('b');

// Infinite currying

function add(arg) {
   return function (b) {
      if (b) return add(arg + b);
      return arg;
   };
}

console.log(add(5)(2)(4)(5)());

// Implement this code
const calc = {
   total: 0,
   add(arg) {
      this.total = this.total + arg;
      return this;
   },
   multiply(arg) {
      this.total = this.total * arg;
      return this;
   },
   subtract(arg) {
      this.total = this.total + arg;
      return this;
   },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
