const debounce = (func, timeout = 2000) => {
   let timer;
   return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         func.apply(this, args);
      }, timeout);
   };
};

const showInput = (name) => console.log(name);

const processChange = debounce(showInput, 3000);
processChange('Hasan');
processChange('Rohan');
