const getFiboNumber = (value) => {
   if (value == 0) return value;
   if (value == 1) return value;

   return getFiboNumber(value - 1) + getFiboNumber(value - 2);
};

for (let i = 0; i < 20; i++) console.log(getFiboNumber(i));
