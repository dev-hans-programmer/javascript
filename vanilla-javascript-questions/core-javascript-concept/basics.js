// 1. Write code to get array of names from given array of users
// 2. Get only active users
// 3. Sort users by age descending
const users = [
   {
      id: '1',
      name: 'Hans',
      isActive: true,
      age: 20,
   },
   {
      id: '2',
      name: 'Rans',
      isActive: false,
      age: 18,
   },
   {
      id: '3',
      name: 'Tans',
      isActive: true,
      age: 30,
   },
];

const mappedNames = users
   .filter((user) => user.name && user.isActive)
   .sort((user1, user2) => user2.age - user1.age)
   .map((user) => user.name);
console.log(mappedNames);

// What will be logged in the first and second example?
let var1;
console.log(var1);
console.log(typeof var1);

// undefined means the variable is declared but the value is not assigned

let var2 = null;
console.log(var2);
console.log(typeof var2); // in case of null, the type is an object
