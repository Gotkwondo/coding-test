// const solution = (n) => {
//   const dp = (n) => {
//     const dp = new Array(n + 1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;
//     for (let i = 2; i <= n; i++) {
//       dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
//     }
//     return dp[n]
//   }
//   return dp(n);
// }

const solution = (n) => {
  let arr = Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
    
  const dp = (num) => {
    if (!arr[num]) {
      arr[num] = dp(num - 1) + dp(num - 2);
    }
    return arr[num] % 1234567;
  }
  return dp(n);
};