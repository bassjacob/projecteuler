module.exports = {
  range: (lower, upper) => Array.from(Array(upper - lower), (_, i) => lower + i),
};
