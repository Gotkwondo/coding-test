const solution = (n, lost, reserve) => {
  let answer = n;
  let nlost = lost.sort((a, b) => a - b).filter(e => !reserve.includes(e));
  let nreserve = reserve.sort((a, b) => a - b).filter(e => !lost.includes(e));
    
  for (let i = 0; i < nlost.length; i++) {
    const lo = nlost[i];
    const idx = nreserve.findIndex(e => e === lo - 1 || e === lo + 1);
    if (idx === -1) {
      answer -= 1;
    }
    else {
      nreserve.splice(idx, 1);
    }
  }
  return answer;
};