// Execute the given list of async functions in parallel and return the results as an array to the callback
const asyncFn1 = (callback) => {
   setTimeout(() => {
      callback(1);
   }, 3000);
};

const asyncFn2 = (callback) => {
   setTimeout(() => {
      callback(2);
   }, 2000);
};

const asyncFn3 = (callback) => {
   setTimeout(() => {
      callback(3);
   }, 1000);
};

const asyncParallel = async (asyncFuncs, callback) => {
   const resultArr = new Array(asyncFuncs.length);
   let resultCounter = 0;

   asyncFuncs.forEach((fn, index) => {
      fn((value) => {
         resultArr[index] = value;
         resultCounter++;

         if (resultCounter >= asyncFuncs.length) {
            callback(resultArr);
         }
      });
   });
};

const asyncParallelWithPromises = async (asyncFuncs, callback) => {
   const data = await Promise.all(
      asyncFuncs.map((fn) => new Promise((resolve) => fn(resolve)))
   );
   callback(data);
};

asyncParallelWithPromises([asyncFn1, asyncFn2, asyncFn3], (result) => {
   console.log('result is', result);
});
