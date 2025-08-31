// scoping
var globalVar = 'I am global scoped';

function test() {
   var functionVar = 'I am function scoped';

   if (true) {
      let blockVar = 'I am a block var';
      console.log(blockVar); // it will work here
   }
   // console.log(blockVar) // will not work here
   console.log(functionVar); // works here
}

function testScope() {
   test();
   console.log(globalVar);
   // console.log(functionVar) // will not work here
}

// shadowing, illegal shadowing
function shadowing() {
   let myName = 'Hasan';

   if (true) {
      let myName = 'Ali';
      console.log(myName); // shadowing
   }
   console.log(myName);
}

function testShadowing() {
   shadowing();
}

// testScope()
testShadowing();
