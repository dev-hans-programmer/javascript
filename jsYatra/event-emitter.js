// Implement event emitter
class EventEmitter {
   constructor() {
      this.map = new Map();
   }

   on(eventName, callback) {
      // First check whether the event exists
      if (!this.map.has(eventName)) this.map.set(eventName, []);

      this.map.get(eventName).push(callback);
   }
   emit(eventName, ...args) {
      // Loop through all the callbacks and execute it with the given params
      const items = this.map.get(eventName);

      if (!items) return;

      items.forEach((fn) => fn(...args));
   }
   off(eventName, callback) {
      const callbacks = this.map.get(eventName);

      if (callbacks) {
         // Filter out the specified callback
         const newCallbacks = callbacks.filter((fn) => fn !== callback);

         // Update the event's callback array
         this.map.set(eventName, newCallbacks);
      }
   }
}

function multiply(a, b) {
   console.log('The product is ' + a * b);
}

const e = new EventEmitter();
console.log('FIRST');
e.on('mul', multiply);
// e.emit('mul', 10, 2);

console.log('SECOND');
e.on('mul', (a, b) => console.log('The sum is ', a + b));
// e.emit('mul', 3, 2);

console.log('THIRD');
// e.off('mul', multiply);
// e.emit('mul', 9, 2);
