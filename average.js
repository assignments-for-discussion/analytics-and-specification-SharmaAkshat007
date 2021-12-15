const ss = require("simple-statistics");

const checkNan = (numbers) => {
  numbers = numbers.filter((number) => !isNaN(number));

  return [numbers, numbers.length];
};

const validateType = (numbers) => {
  numbers = numbers.map((number) => {
    if (typeof number === "string") {
      return Number(number);
    }
    return number;
  });
  return numbers;
};

// Used Interquartile range to find oultiers

const filterOutliers = (numbers) => {
  const q1 = ss.quantile(numbers, 0.25);
  const q3 = ss.quantile(numbers, 0.75);

  const iqr = q3 - q1;

  const upperLimit = q3 + 1.5 * iqr;
  const lowerLimit = q1 - 1.5 * iqr;

  numbers = numbers.filter(
    (number) => number >= lowerLimit && number <= upperLimit
  );

  return [numbers, numbers.length];
};

const average = (numbers) => {
  let size = numbers.length;

  if (size === 0) {
    return NaN;
  }

  [numbers, size] = checkNan(numbers);

  numbers = validateType(numbers);

  [numbers, size] = filterOutliers(numbers);

  return (
    numbers.reduce((p, c) => {
      return p + c;
    }, 0) / size
  );
};

module.exports = { average };
