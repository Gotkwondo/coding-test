const solution = (diffs, times, limit) => {
  let [lp, rp] = [1, diffs.reduce((acc, cur) => Math.max(acc, cur), 0)];
    
  const calc = (mid) => {
    let total = 0;
        
    for (let i = 0; i < diffs.length; i++) {
      const levDiff = diffs[i] - mid;
      if (levDiff <= 0) {
        total += times[i];
      }
      else {
        if (i === 0) {
          total += times[i] * levDiff + times[i];
        }
        else {
          total += (times[i] + times[i - 1]) * levDiff + times[i];
        }
      }
      if (total > limit) return total;
    }
    return total;
  }
    
  while (lp < rp) {
    const mid = Math.floor((lp + rp) / 2);
    const res = calc(mid);
        
    if (res <= limit) {
      rp = mid;
    }
    else {
      lp = mid + 1;
    }
  }
  return lp;
}