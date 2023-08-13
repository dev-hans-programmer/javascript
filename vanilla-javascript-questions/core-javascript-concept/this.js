// what will be logged here
function getItem() {
   console.log(this); // global object without strict mode
}

// getItem();

// What will be the output?
const task = {
   title: 'Ball',
   getItem() {
      console.log('this', this);
   },
};

// task.getItem();

// what will be the ouput?
class Task2 {
   title = 'Ball';
   getItem() {
      function someFn() {
         console.log('this func', this); // undefined
      }
      someFn();
   }
}

// To solve this issue, we can use arrow functions
class Task3 {
   title = 'Ball';
   getItem() {
      const someFn = () => {
         console.log('this arrow', this);
      };
      someFn();
   }
}

const task2 = new Task2();
task2.getItem();

const task3 = new Task3();
task3.getItem();
