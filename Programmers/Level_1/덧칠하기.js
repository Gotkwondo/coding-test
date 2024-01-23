const solution = (n, m, section) => {
  let cnt = 0;
  let painted = 0;
    
  section.forEach(e => {
    if (painted < e) {
      cnt++;
      painted = e + m - 1;
    }
  })
    
  return cnt;
}