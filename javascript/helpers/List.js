const sumIf = (list, predicate) => {
  let sum = 0;
  for (const el of list) {
    if (predicate(el)) sum += el;
  }

  return sum;
}

module.exports = {
  sumIf,
};
