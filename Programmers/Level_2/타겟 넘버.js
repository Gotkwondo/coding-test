const solution = (numbers, target) => {
  let answer = 0;
    
  const dfs = (cnt, val) => {
    if (cnt < numbers.length) {
      dfs(cnt + 1, val + numbers[cnt]);
      dfs(cnt + 1, val - numbers[cnt]);
    }
    else {
      if (val === target) {
        answer += 1;
      }
      return;
    }
  }
  dfs(0, 0);
    
  return answer;
};

// const solution = (numbers, target) => {
//   let answer = 0;
    
//   const dfs = (count, sum) => {
//     if (count < numbers.length) {
//       dfs(count + 1, sum + numbers[count]);
//       dfs(count + 1, sum - numbers[count]);
//     }
//     else {
//       if (sum === target) {
//         answer++;
//       }
//       return;
//     }
//   }
//   dfs(0, 0);
//   return answer;
// }