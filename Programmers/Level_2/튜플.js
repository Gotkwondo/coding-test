const solution = (s) => {
  let test = s.slice(1, s.length - 1).split(',').map(e => {
    return +e.replace(/[{}]/g, '');
  });
    
  const result = test.reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());
    
  return Array.from(result).sort((a, b) => b[1] - a[1]).map(e => e[0]);
};