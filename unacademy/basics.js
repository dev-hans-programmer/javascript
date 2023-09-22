// Implement flatten
function flatten(arr = [], depth = 1) {
   let result = [];
   arr.forEach((ar) => {
      if (Array.isArray(ar) && depth > 0) {
         result.push(...flatten(ar, depth - 1));
      } else {
         result.push(ar);
      }
   });
   return result;
}

let arr = [1, 2, 3, [4, 5, [6, 7, [8, 8]]]];
console.log(flatten(arr, 3));

function a() {
   let timer;
   for (var i = 0; i < 3; i++) {
      timer = setTimeout(function log() {
         console.log(i);
      }, i * 1000);
   }
}

a(); // 3
