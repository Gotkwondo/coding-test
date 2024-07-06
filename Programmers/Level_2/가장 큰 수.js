const solution = (numbers) => {
  let answer = numbers
    .map(n => n.toString())
    .sort((a, b) => {
      return (b + a) - (a + b)
    })
    .join('');
  return answer.replace(/^0+/, '0');
};