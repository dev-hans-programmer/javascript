// What is call?
const obj = { name: 'Haa' };
function sayHello(age, passion) {
   return `Hello ${this.name} and ${age} with ${passion}`;
}

const sayHelloTo25 = sayHello.bind(obj, 25);

console.log(sayHello.call(obj, 24, 'Gaming'));
console.log(sayHello.apply(obj, [24, 'passion']));
console.log(sayHelloTo25('Coding'));
