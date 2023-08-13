// Create a counter function which has increment and getValue functionality
function counter() {
   let count = 0;

   return {
      increment: (value = 1) => (count += value),
      getValue: () => count,
   };
}

const { increment, getValue } = counter();
increment();
console.log(getValue());
