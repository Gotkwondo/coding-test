function solution(m, n, puddles) {
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  puddles.forEach(([y, x]) => {
    map[x - 1][y - 1] = -1;
  });
    
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        map[i][j] = 1;
      }
      else if (map[i][j] >= 0) {
        const up = (i > 0 && i < n && map[i - 1][j] > 0) ? map[i - 1][j] : 0;
        const left = (j > 0 && j < m && map[i][j - 1] > 0) ? map[i][j - 1] : 0;
        map[i][j] += (up + left) % 1000000007;
      }
    }
  }
    
  return map[n - 1][m - 1];
}