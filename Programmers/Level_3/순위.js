const solution = (n, results) => {
  const fight = Array.from({ length: n }, () => Array.from({ length: n }, () => undefined));
  let answer = 0;
    
  results.forEach(([a, b]) => {
    fight[a - 1][b - 1] = [b - 1, 1];
    fight[b - 1][a - 1] = [a - 1, -1];
  });
    
  for (let i = 0; i < n; i++) {
    const lose = [];
    const win = [];
        
    for (let j = 0; j < n; j++) {
      if (!fight[i][j]) continue;
            
      else if (fight[i][j][1] === 1) {
        win.push(fight[i][j][0]);
      }
      else if (fight[i][j][1] === -1) {
        lose.push(fight[i][j][0]);
      }
    }
        
    win.forEach(w => {
      lose.forEach(l => {
        fight[w][l] = [l, -1];
        fight[l][w] = [w, 1];
      });
    });
  }
    
  fight.forEach(e => {
    if (e.filter(el => el !== undefined).length === n - 1) answer++;
  })
  return answer;
};