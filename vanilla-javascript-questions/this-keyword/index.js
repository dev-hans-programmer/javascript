// this keyword (Implicit binding)

this.a = 10;

function getA() {
   console.log(this.a);
}

const obj = {
   name: 'Obj',
   getA() {
      const print = function name() {
         getA();
      };
      return print;
   },
};

let user = {
   name: 'Hasan',
   age: 24,
   getDetails() {
      console.log(this.name);
   },
};

let userA = {
   name: 'Hasan',
   age: 24,
   childObject: {
      newName: 'Hasan Child',
      getDetails() {
         console.log(this);
      },
   },
};

let userC = {
   name: 'Hasan C',
   getDetails: () => {
      console.log(this); // here it will refer to the window object
   },
};

let userD = {
   name: 'Hasan D',
   getDetails() {
      const nestedArrow = () => console.log(this); // this takes the parent 'userD' as a reference
      nestedArrow();
   },
};

// console.log(obj.getA()());
// user.getDetails();
// userA.childObject.getDetails(); // it will refer to the child object
// userC.getDetails();
userD.getDetails();
