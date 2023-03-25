const upperFirstWord = (str) => {
   const [first, ...others] = str.split(' ');
   return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn = () => {}) => {
   console.log(`Original ${str}`);
   console.log('Transformed string', fn(str));
   console.log('Tranformed by', fn.name);
};

// functions returning functions
function greet(greeting) {
   return function (name) {
      console.log(`${greeting} ${name}`);
   };
}

const greetWithArray = (greeting) => (name) =>
   console.log(`${greeting} ${name}`);

greet('Hey')('Hasan');
greetWithArray('Hey')('Raina');

// transformer('my name is Hasan Ali', upperFirstWord);
