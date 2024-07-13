function solution(n, s) {
  if (n > s) return [-1];
  else {
    const div = Math.floor(s / n);
    let rest = s % n;
    const answer = [];
        
    if (rest === 0) {
      for (let i = 0; i < n; i++) {
        answer.push(div);
      }
    }
    else if (rest > 0) {
      for (let i = 0; i < n; i++) {
        if (rest > 0) {
          answer.push(div + 1);
          rest--;
        }
        else if (rest === 0) {
          answer.push(div);
        }
        else break;
      }
    }
    return answer.sort();
  }
}