const solution = (s) => {
  let answer = 1;
  const dp = Array.from({ length: s.length }, (_, i) => Array.from({ length: s.length }, (_, j) => i === j));

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      answer = 2;
    }
  }

  for (let i = 3; i <= s.length; i++) {
    for (let st = 0; st <= s.length - i; st++) {
      const end = st + i - 1;
      if (s[st] === s[end] && dp[st + 1][end - 1]) {
        dp[st][end] = true;
        answer = i;
      }
    }
  }

  return answer;
}