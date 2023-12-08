const solution = (elements) => {
  const sumSet = new Set();
  const len = elements.length;
  for (let i = 1; i <= len; i++) {
    let sum = 0;
        
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        sum = elements.slice(0, i).reduce((acc, cur) => acc + cur, 0);
      }
      else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % len];
      }
      sumSet.add(sum);
    }
  }
  return sumSet.size;
}