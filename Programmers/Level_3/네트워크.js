const solution = (n, computers) => {
  let answer = 0;
  const visited = [];
    
  const dfs = (idx) => {
    visited[idx] = true;
    for (let i = 0; i < computers[idx].length; i++) {
      if (!visited[i] && computers[idx][i] === 1) {
        dfs(i);
      }
    }
  }
    
  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
};