const flightNumber = '23EFR1';
const passenger = {
   name: 'Hasan Ali',
   destination: 'New York',
};

function checkIn(flightNumber, passenger) {
   passenger.name = 'Mr. ' + passenger.name;
}

checkIn(flightNumber, passenger);
console.log('After', passenger);
