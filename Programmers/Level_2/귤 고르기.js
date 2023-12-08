const solution = (k, tangerine) => {
  let freq = new Map();
  let answer = 0;
    
  tangerine.forEach(e => freq.set(e, (freq.get(e) || 0) + 1));
    
  const arr = [...freq].sort((a, b) => b[1] - a[1]).map(e => e[1]);
    
  while (k > 0) {
    k -= arr.shift();
    answer++;
  }
  return answer
}