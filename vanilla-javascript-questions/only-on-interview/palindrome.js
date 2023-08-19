const checkPalindrome = (value = '') => {
   const orginalValue = value;
   return Array.from(value).reverse().join('') === orginalValue;
};

const checkRawPalindrome = (value = '') => {
   const originalValue = value;
   let reverse = '';

   for (let i = value.length - 1; i >= 0; i--) reverse += value[i];

   return originalValue === reverse;
};

console.log(checkRawPalindrome('margram'));
