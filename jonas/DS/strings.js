function capitalize(sen) {
   const first = sen.slice(0, 1);
   const remaining = sen.slice(1).toLowerCase();
   const final = first.toUpperCase() + remaining;
   console.log(final);
}

const name = 'Hasan Ali';

console.log(name.padStart(20, '*'));

capitalize('jOnAs');

function maskCreditCard(number, length = 3) {
   const value = typeof number === 'number' ? number + '' : number;
   if (value.length < length)
      throw new Error('Please provide a lesser length than the actual');
   const remaining = value.slice(length);
   const stars = new Array(length).fill('*').join('');
   const result = stars + remaining;
   console.log(result);
}
maskCreditCard('123456');
maskCreditCard(987654321, 5);
