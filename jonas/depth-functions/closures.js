function outer() {
   const name = 'hey I am outside';

   return function () {
      console.log(name);
   };
}

const inner = outer();
inner();
