const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;
};

const checkWinner = (avgDolphins, avgKoaloas) => {
  if (avgDolphins === avgKoaloas) return;
  if (avgDolphins >= 2 * avgKoaloas)
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoaloas}`);
  else if (avgKoaloas >= 2 * avgDolphins)
    console.log(`Koalas win ${avgKoaloas} vs ${avgDolphins}`);
  else console.log('No Team wins');
};

// Test DATA 1:
const avgDolphins = calcAverage(44, 23, 71);
const avgKoaloas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoaloas);

// Test DATA 2:
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
