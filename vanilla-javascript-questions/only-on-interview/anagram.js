// Write a code to check whwther two string are anagram or not
function checkAnagram(str1 = '', str2 = '') {
   // Remove spaces
   str1 = str1.replace(/\s+/g, '');
   str2 = str2.replace(/\s+/g, '');

   // if lengths are different, then they can't be anagrams
   if (str1.length !== str2.length) return false;

   const charCount1 = {};
   const charCount2 = {};

   for (let char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
   }
   for (let char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
   }

   // Compare character frequence maps
   for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
         return false;
      }
   }
   return true;
}

const str1 = 'listen';
const str2 = 'silent';

console.log(checkAnagram(str1, str2));
console.log(checkAnagram('hello', 'world'));
