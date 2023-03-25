function getParams(...params) {
   console.log(params);
}

const values = [1, 2];

getParams(...values);

const numGuests = 0;
const guests = numGuests || 10;
const guestsCorrected = numGuests ?? 10;

console.log(guests);
console.log(guestsCorrected);
