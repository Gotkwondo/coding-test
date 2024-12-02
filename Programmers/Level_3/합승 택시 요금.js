function solution(n, s, a, b, fares) {
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  let answer = Infinity;
    
  for (let i = 0; i < n; i++) {
    map[i][i] = 0;
  }
    
  for (let [s, e, v] of fares) {
    map[s - 1][e - 1] = v;
    map[e - 1][s - 1] = v;
  }
    
  // k => 경유
  for (let k = 0; k < n; k++) {
    // i => 출발
    for (let i = 0; i < n; i++) {
      // j => 종점
      for (let j = 0; j < n; j++) {
        if (map[i][k] + map[k][j] < map[i][j]) {
          map[i][j] = map[i][k] + map[k][j];
        }
      }
    }
  }
    
  for (let i = 0; i < n; i++) {
    const temp = map[s - 1][i] + map[i][a - 1] + map[i][b - 1];
    if (answer > temp) answer = temp;
  }
    
  return answer;
}