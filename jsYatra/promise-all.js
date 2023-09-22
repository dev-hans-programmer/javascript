function promiseOne() {
   return new Promise((resolve) => resolve('Hello first'));
}
function promiseTwo() {
   return new Promise((resolve) => resolve('Hello second'));
}
function promiseThree() {
   return new Promise((resolve, reject) => reject('Third has been rejected'));
}

function myPromiseAll(promises = []) {
   return new Promise((resolve, reject) => {
      const results = [];

      if (promises.length === 0) {
         resolve(results); // If there are no promises, resolve with an empty array
      }

      promises.forEach((promise, index) => {
         promise
            .then((res) => {
               results[index] = res;

               if (index === promises.length - 1) resolve(results);
            })
            .catch((err) => reject(err));
      });
   });
}

// Example usage:
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);

myPromiseAll([promis, promise2, promise3])
   .then((results) => {
      console.log('All promises resolved:', results); // [1, 2, 3]
   })
   .catch((error) => {
      console.error('At least one promise rejected:', error);
   });
