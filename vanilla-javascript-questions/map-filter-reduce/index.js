Array.prototype.myMap = function (cb) {
   const temp = [];
   for (let i = 0; i < this.length; i++) temp.push(cb(this[i], i, this));

   return temp;
};

Array.prototype.myFilter = function (cb) {
   const temp = [];

   for (let i = 0; i < this.length; i++)
      if (cb(this[i], i, this)) temp.push(this[i]);

   return temp;
};

Array.prototype.myReduce = function (cb, initialValue) {
   let acc = initialValue;

   for (let i = 0; i < this.length; i++)
      acc = acc ? cb(acc, this[i], i, this) : this[i];

   return acc;
};

Array.prototype.myReduce2 = function (cb, initialValue) {
   let acc = initialValue;
   for (let i = 0; i < this.length; i++) {
      acc = acc ? cb(acc, this[i]) : this[i];
   }
};

console.log([1, 2].myMap((tem) => tem * 2));
console.log([1, 2].myFilter((tem) => tem >= 2));
console.log([1, 2].myReduce((acc, curr) => acc + curr, 0));
