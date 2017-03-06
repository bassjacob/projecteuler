// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const Enum = require('../helpers/Enum');
const List = require('../helpers/List');

module.exports = function () {
  const isMult = x => y => y % x === 0;
  const isMult3Or5 = x => [isMult(5), isMult(3)].reduce((p, c) => p || c(x), false);
  const result = List.sumIf(Enum.range(0, 1000), isMult3Or5);

  return Promise.resolve(result);
}
