const solution = (targets) => {
  let answer = 1;
  targets.sort((a, b) => b[0] - a[0]);
  let point = targets[0][0];
    
  targets.forEach(e => {
    const [st, end] = e;
    if (point >= end) {
      answer += 1;
      point = st;
    }
  })
  return answer
}