const throttle = (func, timeout = 2000) => {
   let isWaiting = false;
   return (...args) => {
      if (!isWaiting) {
         func.apply(this, args);
         isWaiting = true;
         setTimeout(() => {
            isWaiting = false;
         }, timeout);
      }
   };
};

const saveInput = (name) => console.log(name);

const processChange = throttle(saveInput, 3000);

processChange('hey');
processChange('hey Hi');
processChange('hey Hello');
