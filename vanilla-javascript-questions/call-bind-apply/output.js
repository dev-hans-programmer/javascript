// Output
const age = 10;
var person = {
   name: 'Hasan A',
   age: 20,
   getAge: function () {
      return this.age;
   },
};

var person2 = { age: 24 };
// console.log(person.getAge.call(person2));

//2.
var status = 'global status';
setTimeout(() => {
   const status = 'Status first';

   const data = {
      status: 'Status obj',
      getStatus() {
         return this.status;
      },
   };

   console.log(data.getStatus()); // Status obj
   console.log(data.getStatus.call(this)); // global status
}, 0);

// Call printAnimals such that it prints all animals in object
const animals = [
   { species: 'Lion', name: 'King' },
   { species: 'Whale', name: 'Queen' },
];

function printAnimals(i) {
   this.print = function () {
      console.log('#' + i + ' ' + this.species + ':' + this.name);
   };
   this.print();
}

printAnimals.call(animals[1], 1);

// Append two arrays
const arr = [1, 2];
const arr1 = [3, 4];
arr.push.apply(arr, arr1);
console.log(arr);

// Find maximum
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers));

// Bind chaining
function f() {
   console.log(this.name);
}

f = f.bind({ name: 'Hasan' }).bind({ name: 'Ali' }); // it will print 'Hasan' as bind chaining does not work
f();
// We cannot change context of arrow functions using call, apply, bind
