function average(numbers) {
  let size = numbers.length;

  if (size == 0) {
    return NaN;
  }

  return (
    numbers.reduce((p, c) => {
      if (isNaN(c)) {
        size -= 1;
        return p;
      }
      return p + c;
    }, 0) / size
  );
}

module.exports = { average };
