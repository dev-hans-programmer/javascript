const user = {
   firstName: 'Hasan',
   getName() {
      const firstName = 'Hasan inside';
      return this.firstName;
   },
};

console.log(user.getName());

// What is the result?
function makeUser() {
   return {
      name: 'John',
      ref: this,
   };
}

const makeuser = makeUser();
console.log(makeuser.ref); // it will point to global object

const timedUser = {
   name: 'Hasan Ali',
   logMessage() {
      console.log(this); // here it will be the global project
   },
};

setTimeout(timedUser.logMessage, 1000);

const newUser = {
   name: 'Hasan Ali New User',
   greet() {
      return `Hello ${this.name}`;
   },
   farewell: () => `Goodbye ${this.name}`,
};

console.log(newUser.greet());
console.log(newUser.farewell());

var length = 4;
function callback() {
   console.log(this.length);
}

const objectN = {
   length: 5,
   method(fn) {
      fn();
   },
   methodArg() {
      arguments[0](); // it will point to the length of the array
   },
};

objectN.method(callback);
objectN.methodArg(callback, 2, 3);
