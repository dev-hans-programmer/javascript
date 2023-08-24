// Write a function which converts a string to title case
function convertToTitleCase(str = '') {
   // convert to lower case
   // split by space
   // loop through all the values and capitalize the first letter and join it as a string
   // return the string
   return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
         const [first, ...rest] = word;
         return first.toUpperCase() + rest.join('');
      })
      .join(' ');
}

const str = 'HERE IS MY HANDLE';
console.log(convertToTitleCase(str));
