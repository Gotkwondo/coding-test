const solution = (a) => {
  const answer = [];
  let [lp, rp] = [0, a.length - 1];
  let [lm, rm] = [a[lp], a[rp]];
  while (true) {
    if (lm > rm) {
      if (lm > a[lp + 1]) {
        answer.push(a[lp + 1]);
        lm = a[lp + 1];
      }
      lp += 1;
    }
    else if (lm < rm) {
      if (rm > a[rp - 1]) {
        answer.push(a[rp - 1]);
        rm = a[rp - 1];
      }
      rp -= 1;
    }
    if (rp - lp === 1) break;
  }
    
  return answer.length + 2;
};