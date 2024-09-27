function solution(n) {
  if (n % 2 === 1) return 0;

  const dp = [0, 3, 11];

  for (let i = 3; i <= (n / 2); i++) {
    dp[i] = (((dp[i - 1] * 4)) - (dp[i - 2]) + 1000000007) % 1000000007;
  }

  return dp[n / 2];
}