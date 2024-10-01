function solution(info, edges) {
  let answer = 0;
  const map = Array.from({ length: info.length }, () => []);
    
  edges.forEach(([p, c]) => {
    map[p].push(c)
  });
    
  const dfs = (curIdx, sheep, wolf, arr) => {
    info[curIdx] ? wolf++ : sheep++;
    if (answer < sheep) answer = sheep;
    
    if (sheep <= wolf) {
      return;
    }
        
    for (let i = 0; i < arr.length; i++) {
      const t = arr[i];
      dfs(t, sheep, wolf, [...arr.filter(e => e !== t), ...map[t]]);
    }
    return;
  }
  dfs(0, 0, 0, map[0]);
    
  return answer;
}