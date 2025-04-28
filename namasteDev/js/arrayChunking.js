function chunkArray(arr = [], n = 0) {
   const result = [];
   if (n > arr.length) return [arr];
   for (let i = 0; i < arr.length; i = i + n) {
      result.push(arr.slice(i, i+n));
   }

   return result;
}
const inputArr = [];
const size = 5;

console.log('object :>> ', chunkArray(inputArr, size));
