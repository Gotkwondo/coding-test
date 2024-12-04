function solution(scores) {
  let wan = scores[0];
  let state = 1;
  let before = 0;
    
  scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
    
  for (let score of scores) {
    if (score[0] > wan[0] && score[1] > wan[1]) return -1;
    else if (before <= score[1]) {
      if (score[0] + score[1] > wan[0] + wan[1]) {
        state += 1;
      }
      before = score[1];
    }
  }
  return state;
}