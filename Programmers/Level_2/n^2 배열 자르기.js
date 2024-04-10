const solution = (n, left, right) => {
  let answer = [];
    
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    let num = row;
        
    if (row < col) num = col;
    answer.push(num + 1);
  }
  return answer;
};

// const solution = (n, left, right) => {
//   let arr = []
    
//   for (let i = left; i <= right; i++) {
//     let row = i % n;
//     let col = Math.floor(i / n);
//     let num = col;
        
//     if (row > col) {
//       num = row;
//     }
//     arr.push(num + 1);
//   }
//   return arr;
// };