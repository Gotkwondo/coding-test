const solution = (n, left, right) => {
  let arr = []
    
  for (let i = left; i <= right; i++) {
    let row = i % n;
    let col = Math.floor(i / n);
    let num = col;
        
    if (row > col) {
      num = row;
    }
    arr.push(num + 1);
  }
  return arr;
}