const solution = (str1, str2) => {
  const str1R = makeArr(str1.toLowerCase());
  const str2R = makeArr(str2.toLowerCase());
    
  const set = [...new Set([...str1R, ...str2R])];
  let union = 0;
  let intersection = 0;
    
  set.forEach((e) => {
    const have1 = str1R.filter((el) => el === e).length;
    const have2 = str2R.filter((el) => el === e).length;
    union += Math.max(have1, have2);
    intersection += Math.min(have1, have2);
  })
  if (union === intersection) return 65536;
  else {
    return Math.floor((intersection / union) * 65536);
  }
};

const makeArr = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const s = str.substr(i, 2);
    if (s.match(/[a-z]{2}/, 'g')) {
      arr.push(s);
    }
  }
  return arr;
};