function solution(info, n, m) {
  let answer = Infinity;
  // let visited = new Set();
  let vi = Array.from({ length: info.length }, () => Array.from({ length: n }, () => Array.from({ length: m }, () => false)));
  const dfs = (idx, a, b) => {
    if (idx === info.length) {
      answer = Math.min(answer, a);
      return;
    }
    const nA = a + info[idx][0];
    const nB = b + info[idx][1];
    const check = `${idx}, ${a}, ${b}`
        
    // if(visited.has(check)) return;
    // visited.add(check);
    if (vi[idx][a][b]) return;
    vi[idx][a][b] = true;
        
    if (nA < n && nA < answer) {
      dfs(idx + 1, nA, b);
    }
        
    if (nB < m) {
      dfs(idx + 1, a, nB);
    }
    return;
  }
  dfs(0, 0, 0);
    
  return answer === Infinity ? -1 : answer;
}