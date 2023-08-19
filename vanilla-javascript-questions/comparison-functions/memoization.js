// Design a memoization function which adds 10 to a provided value and take it from cache if it was already calculated.

const memoize = () => {
   let cache = {};

   return (value) => {
      if (value in cache) {
         console.log('Fetching from cache');
         return cache[value];
      }
      console.log('Calculating result');
      const result = value + 10;
      cache[value] = result;
      return result;
   };
};

const addValue = memoize();
console.log(addValue(10));
console.log(addValue(10));
console.log(addValue(10));
