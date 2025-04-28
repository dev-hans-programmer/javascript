function shuffle(array) {
   return array
      .map((item) => ({ sort: Math.random(), val: item }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.val);
}

const input = [1, 2, 3, 4, 5];
console.log(shuffle(input));
