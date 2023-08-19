// Design a deep comparison function

const typeOf = (input) => {
   const rawObject = Object.prototype.toString.call(input).toLowerCase();
   const typeOfRegex = /\[object (.*)]/g;
   const type = typeOfRegex.exec(rawObject)[1];
   return type;
};

const deepCompare = (source, target) => {
   if (typeOf(source) !== typeOf(target)) return false;

   if (typeOf(source) === 'array') {
      if (source.length !== target.length) return false;

      return source.every((el, index) => deepCompare(el, target[index]));
   }

   if (typeOf(source) === 'object') {
      if (Object.keys(source).length !== Object.keys(target).length)
         return false;

      return Object.keys(source).every((key) =>
         deepCompare(source[key], target[key])
      );
   }
   if (typeOf(source) === 'date') return source.getTime() === target.getTime();

   return source === target;
};

console.log(
   deepCompare(
      { a: 1, b: 2, c: { a: 1, b: 2 } },
      { a: 1, b: 2, c: { a: 1, b: 3 } }
   )
);
