const solution = (arr) => {
  return arr.reduce((a, b) => {
    return (a * b) / getGcd(a, b)
  }, 1)
};

const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b)