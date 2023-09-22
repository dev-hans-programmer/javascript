function customFindIndex(arr = [], callback, optionalIndex = 0) {
   const length = arr.length;
   const start = optionalIndex >= 0 ? optionalIndex : length + optionalIndex;
   for (let i = start; i < length; i++) {
      if (callback(arr[i], i, arr)) return i;
   }
   return -1;
}

console.log(customFindIndex([1, 3, 3, 4], (num) => num === 3));
