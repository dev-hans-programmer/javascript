// Recursively
function flatten(arr = []) {
   let results = [];

   arr.forEach((item) => {
      if (Array.isArray(item)) {
         results.push(...flatten(item));
      } else {
         results.push(item);
      }
   });

   return results;
}

// improved recursive
function flattenImp(arr = []) {
   return arr.reduce(
      (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
      []
   );
}

// O(1) complexity
function flattenO1(arr = []) {
   for (let i = 0; i < arr.length; ) {
      const item = arr[i];
      if (Array.isArray(item)) {
         arr.splice(i, 1, ...item);
      } else {
         i++;
      }
   }
   return arr;
}

// Iterative brute force
function itrBtrFlatten(arr = []) {
   const newArr = [...arr];
   const result = [];

   while (newArr.length) {
      const firstItem = newArr.shift();

      if (Array.isArray(firstItem)) {
         result.unshift(...firstItem);
      } else {
         result.push(firstItem);
      }
   }
   return result;
}

// Iterative
function itrFlatten(arr = []) {
   while (arr.some(Array.isArray)) {
      arr = [].concat(...arr);
   }
   return arr;
}

const input = [1, 2, 3, [4, [5, 6, [7, [8, 9, [10, [11]]]]]]];
console.log('RES', flatten(input));
console.log('RES improved', flattenImp(input));
console.log('RES O1', flattenO1(input));
console.log('RES ITR', itrFlatten(input));
