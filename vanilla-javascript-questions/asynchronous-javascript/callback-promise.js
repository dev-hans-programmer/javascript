// Create a promise function to be able to use callback function via promise approach
const asyncFunc = (callback) => {
   setTimeout(() => {
      callback('Hey I am done');
   }, 3000);
};

// Promise approach
const asyncFuncWithPromise = () => {
   return new Promise((resolve) => asyncFunc((data) => resolve(data)));
};

asyncFunc((msg) => console.log(msg));

asyncFuncWithPromise().then((data) => console.log('With promise', data));
