// Write code check panagram
function checkPanagram(str1 = '', str2 = '') {
   str1 = str1.toLowerCase().replace(/ /g, '');
   str2 = str2.toLowerCase().replace(/ /g, '');

   let str1FreqMap = {};
   let str2FreqMap = {};

   for (let char of str1) {
      str1FreqMap[char] = (str1FreqMap[char] || 0) + 1;
   }
   for (let char of str2) {
      str2FreqMap[char] = (str2FreqMap[char] || 0) + 1;
   }

   for (let char in str1FreqMap) {
      if (str2FreqMap[char] !== str1FreqMap[char]) return false;
   }

   return true;
}

console.log(checkPanagram('Hey there', 'heyt heree'));

function isPangram(str) {
   // Create an array to keep track of seen letters
   const alphabet = Array(26).fill(false);

   // Convert the input string to lowercase for case-insensitive comparison
   const lowercaseStr = str.toLowerCase();

   // Iterate through the characters in the string
   for (let i = 0; i < lowercaseStr.length; i++) {
      const char = lowercaseStr.charAt(i);

      // Check if the character is a lowercase letter
      if (char >= 'a' && char <= 'z') {
         // Mark the letter as seen by setting the corresponding element in the alphabet array to true
         const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
         alphabet[index] = true;
      }
   }

   console.log(alphabet);

   // Check if all letters of the alphabet have been seen
   return alphabet.every((letter) => letter === true);
}

// Example usage:
const testString = 'The quick brown fox jumps over the lazy dog';
const result = isPangram(testString);

if (result) {
   console.log('The string is a pangram.');
} else {
   console.log('The string is not a pangram.');
}
