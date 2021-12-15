const checkNan = (numbers) => {
  numbers = numbers.filter((number) => !isNaN(number));

  return [numbers, numbers.length];
};

function average(numbers) {
  let size = numbers.length;

  if (size === 0) {
    return NaN;
  }

  [numbers, size] = checkNan(numbers);

  return (
    numbers.reduce((p, c) => {
      if (typeof c === "string") {
        return p + Number(c);
      }
      return p + c;
    }, 0) / size
  );
}

module.exports = { average };
