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
      } else if (typeof c === "string") {
        return p + Number(c);
      }
      return p + c;
    }, 0) / size
  );
}

module.exports = { average };
