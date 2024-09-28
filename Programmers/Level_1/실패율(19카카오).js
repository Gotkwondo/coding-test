const solution = (N, stages) => {
  const map = new Map();
  const answer = Array.from({ length: N + 1 }, () => 0);
    
  for (let i = 0; i < stages.length; i++) {
    const num = stages[i];
    for (let j = 1; j <= num; j++) {
      map.set(j, map.has(j) ? map.get(j) + 1 : 1)
    }
  }
    
  for (let i = 0; i < N; i++) {
    const cur = map.get(i + 1);
    const next = map.has(i + 2) ? map.get(i + 2) : 0;
    const per = (cur - next) / cur;
    answer[i] = per ? per : 0;
  }
  const test = answer.map((e, i) => [e, i]).sort((a, b) => b[0] - a[0] || a[1] - a[1]).map(([_, i]) => i + 1);
    
  return test.slice(0, N);
};

// const solution = (N, stages) => {
//   let answer = [];
//   for (let i = 1; i <= N; i++) {
//     const nPass = stages.filter(e => e === i).length;
//     const apro = stages.filter(e => e >= i).length;
//     answer.push([i, nPass / apro]);
//   }
//   return answer.sort((a, b) => b[1] - a[1]).map(e => e[0]);
// }