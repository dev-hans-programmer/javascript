const names = ['Hasan', 'Raina', 'neha'];

for (const name of names) {
   console.log(name);
}
for (const name of names.entries()) {
   const [index, value] = name;
   console.log(`${index}. ${value}`);
}
const nameObjArray = [
   {
      name: 'Hasan',
      age: 24,
   },
   {
      name: 'raina',
      age: 24,
   },
];

for (const item of nameObjArray.entries()) {
   console.log(item);
}

const obj = { name: 'TTT', age: 21 };
const ent = Object.entries(obj);
console.log(ent);
