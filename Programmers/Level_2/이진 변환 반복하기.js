const solution = s => {
  let ocount = 0, count = 0;
  
  while (s.length > 1) {
    let nlength = s.length;
    s = s.replace(/0/g, "");
    ocount += nlength - s.length;
    s = s.length.toString(2);
    count++
  }
  return [count, ocount];
}