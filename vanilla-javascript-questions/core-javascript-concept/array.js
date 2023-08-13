// Create a function which gets an array and an element and returns an array with this element at the end

function addElementEnd(arr = [], ele) {
   const deepCopy = [...arr];
   const length = deepCopy.length;

   for (let i = 0; i < length; i++) {
      if (i == length - 1) {
         deepCopy[i + 1] = ele;
         return deepCopy;
      }
   }
}
const numbers = [1, 2, 3, 4];

console.log(addElementEnd(numbers, 5));
console.log(numbers);

// Write a function which can concatenate 2 arrays
function mergeArrays(arr1 = [], arr2 = []) {
   //    return [...arr1, ...arr2];
   return arr1.concat(...arr2);
}

const arr1 = [2, 3, 4, 5];
const arr2 = [6, 7];

console.log(mergeArrays(arr1, arr2));

// Check the user with such name exists in array of objects
function isUserExists(arr = [], name) {
   // solution 1
   //    const names = arr.map((item) => item.name);
   //    return names.includes(name);

   //    solution 2
   //    let isExist = false;
   //    for (const item of arr) {
   //       if (item.name === name) {
   //          return true;
   //       }
   //    }
   //    return isExist;

   // solution 3
   //    arr.forEach((item) => {
   //       if (item.name === name) {
   //          isExist = true;
   //       }
   //    });

   //    return isExist;

   //    solution 4
   return arr.some((item) => item.name === name);
}

const users = [
   {
      id: 1,
      name: 'Jack',
      isActive: true,
   },
   {
      id: 2,
      name: 'Leo',
      isActive: false,
   },
];

console.log(isUserExists(users, 'Leo'));

// Remove all the duplicates in the array
function removeDuplicates(arr = []) {
   // solution 1
   let withoutDuplicates = [];
   withoutDuplicates = [...new Set(arr)];

   // solution 2
   arr.forEach((num) => {
      if (!withoutDuplicates.includes(num)) withoutDuplicates.push(num);
   });

   //    solution 3
   withoutDuplicates = arr.reduce((acc, ele) => {
      return acc.includes(ele) ? acc : [...acc, ele];
   }, []);

   return withoutDuplicates;
}

const numbersWithDuplicates = [1, 2, 3, 1, 4, 2, 3];
console.log(numbersWithDuplicates, removeDuplicates(numbersWithDuplicates));

// Find the number of occurences of minimum value in the list
function findOcc(arr = []) {
   // Naive solution
   const min = Math.min(...arr);
   // find occ
   const occ = arr.reduce((acc, ele) => {
      return ele === min ? acc + 1 : acc;
   }, 0);
   return occ;
}
const randomValues = [1, 10, 1, 23, 1, 24];
console.log(findOcc(randomValues)); // 3
