// brute force
function intersectionWith(callback, ...arr) {
   const firstArray = [...arr[0]];
   const otherArrays = [...arr.slice(1)];

   return firstArray.filter((firstArrayItem) =>
      otherArrays.every((otherArray) =>
         otherArray.some((secondArrayItem) =>
            callback(firstArrayItem, secondArrayItem)
         )
      )
   );
}

const objects = [
   { x: 1, y: 2 },
   { x: 2, y: 1 },
];
const others = [
   { x: 1, y: 1 },
   { x: 1, y: 2 },
];
console.log(
   intersectionWith((a, b) => a.x === b.x && a.y === b.y, objects, others)
);
