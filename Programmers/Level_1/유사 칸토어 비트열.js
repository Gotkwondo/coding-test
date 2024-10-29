const solution = (n, l, r) => {
  let cnt = 0;
    
  const check = (index) => {
    if (index < 5) {
      return index % 5 === 2 ? false : true;
    }
    if ((index - 2) % 5 === 0) return false;
    return check(Math.floor(index / 5));
        
  }
    
  for (let i = l - 1; i < r; i++) {
    if (check(i)) {
      cnt += 1;
    }
  }
    
  return cnt;
};