// Sort the array of numbers
function sortArray(arr = []) {
   let result = [];
   const deepCopy = [...arr];

   result = deepCopy.sort((a, b) => a - b);
   return result;
}

const numbers = [2, 1, 10, 3, 18, 11];
console.log(numbers, sortArray(numbers));

// sort the array of objects by author's last name
function sortArrOfObjects(arr = []) {
   const deepCopy = [...arr];

   return deepCopy.sort((item1, item2) => {
      const authorLastName1 = item1.author.split(' ')[1];
      const authorLastName2 = item2.author.split(' ')[1];

      return authorLastName1 < authorLastName2 ? -1 : 1;
   });
}

const books = [
   {
      name: 'Harry Poter',
      author: 'Joanne Rowling',
   },
   {
      name: 'Warcross',
      author: 'Marie Lu',
   },
   {
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
   },
];

console.log(sortArrOfObjects(books));
