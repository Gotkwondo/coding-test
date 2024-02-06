const solution = (N, stages) => {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    const nPass = stages.filter(e => e === i).length;
    const apro = stages.filter(e => e >= i).length;
    answer.push([i, nPass / apro]);
  }
  return answer.sort((a, b) => b[1] - a[1]).map(e => e[0]);
}