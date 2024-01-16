const solution = (number, limit, power) => {
  let arr = [];
    
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
        
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt++;
        if (i / j !== j) cnt++;
      }
    }
    arr.push(cnt);
  }
  return arr.reduce((acc, cur) => acc + (cur > limit ? power : cur), 0);
}