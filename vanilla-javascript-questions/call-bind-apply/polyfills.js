// polyfill for call
const car = {
   name: 'Ferrai',
};
function purchaseCar(price) {
   console.log('I have purchased ' + this.name + 'with a price of ' + price);
}

Function.prototype.myCall = function (context = {}, ...args) {
   if (typeof this !== 'function') throw new Error('Not callable');

   context.fn = this;
   context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args) {
   if (typeof this !== 'function') throw new Error('Not callable');

   if (!Array.isArray(args)) throw new Error('Not an array');

   context.fn = this;
   context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
   if (typeof this !== 'function') throw new Error('Not callable');

   context.fn = this;
   return function (...newArgs) {
      return context.fn(...args, ...newArgs);
   };
};

purchaseCar.myCall(car, 3000000);
purchaseCar.myApply(car, [400000]);
const newFn = purchaseCar.myBind(car, 60000);
newFn();
