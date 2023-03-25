'use strict';

const tataAirline = {
   name: 'Tata',
   bookings: [],
   book(flightNum, name) {
      console.log(`${name} booked a flight on ${this.name}`);
      this.bookings.push({ flight: `${name}${flightNum}` });
   },
};

tataAirline.book(123, 'Hasan Ali');
tataAirline.book(321, 'Rohan Pradev');

// We won't again add the book method in vistara object
const vistara = {
   name: 'Vistara',
   bookings: [],
};

const book = tataAirline.book;

book.call(vistara, 111, 'Brad');

console.log(tataAirline);
console.log(vistara);

const flightData = [431, 'Babu'];
book.apply(vistara, flightData);
console.log(vistara);

function myNewName() {
   console.log('This value', this);
   console.log('My name is new name');
}

myNewName.call(vistara);

const bookVistara = book.bind(vistara);
bookVistara(222, 'TestBind');

const bookTata = book.bind(tataAirline, 611);
bookTata('static flight');

tataAirline.passengers = 0;
tataAirline.addPassenger = function () {
   this.passengers++;
};

// It works here
tataAirline.addPassenger();
console.log(tataAirline);

// lets add an event listener
// document
//    .querySelector('#test')
//    .addEventListener('click', tataAirline.addPassenger.bind(tataAirline));

const addTax = (rate, val) => val + val * rate;

console.log(addTax(0.2, 100));

// As we are needing any 'this' hence setting it to null
const addVat = addTax.bind(null, 0.2);
console.log(addVat(100));
