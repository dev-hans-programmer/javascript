function makeCounter(initialValue = 0) {
    const original = initialValue;
      return {
        increment: () => ++initialValue,
        decrement: () => --initialValue,
        reset: () => initialValue = original
      }
  }

const counter = makeCounter(5);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.increment())