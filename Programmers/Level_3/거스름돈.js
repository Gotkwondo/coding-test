function solution(n, money) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
    
  for (const coin of money) {
    for (let i = coin; i < n + 1; i++) {
      dp[i] += dp[i - coin];
    }
    console.log(dp)
  }
  return dp[n] % 1000000007;
}