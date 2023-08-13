// Write a range function
function range(start, end) {
   // solution 1
   //    const values = [];
   //    for (let i = start; i <= end; i++) values.push(i);

   //    return values.join(',');

   // solution 2
   return [...Array(end).keys()].map((el) => el + start);
}

console.log(range(10, 100));

// Write a function which implements suffle
function shuffle(arr = []) {
   const deepCopy = [...arr];
   return deepCopy
      .map((item) => ({ sort: Math.random(), value: item }))
      .sort((item1, item2) => item1.sort - item2.sort)
      .map((ele) => ele.value);
}

const unshuffled = [1, 2, 3, 4, 5];
console.log(shuffle(unshuffled));
