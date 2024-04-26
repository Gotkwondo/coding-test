const solution = (topping) => {
  const map = new Map();
  const bro = new Set();
  let answer = 0;
    
  topping.forEach(e => {
    map.set(e, map.get(e) ? map.get(e) + 1 : 1);
  })
    
  topping.forEach((e, i) => {
    const sep = map.get(e) - 1;
    sep === 0 ? map.delete(e) : map.set(e, sep);
    bro.add(e)
    if (bro.size === map.size) answer += 1;
  })
  return answer;
};