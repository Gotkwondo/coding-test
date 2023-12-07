const solution = (brown, yellow) => {
  const total = brown + yellow;
  for (let i = 3; i <= brown; i++) {
    if (total % i === 0) {
      const height = total / i;
      if ((height - 2) * (i - 2) === yellow) {
        return [height, i]
      }
    }
  }
};