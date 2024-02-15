const solution = (lottos, win_nums) => {
  let win = [6, 5, 4, 3, 2, 1];
  const notBlank = lottos.filter(el => el !== 0);
  const blank = lottos.filter(el => el === 0).length;
  let arr = [];
    
  win_nums.forEach(e => {
    if (lottos.includes(e)) arr.push(e);
  });
    
  return [win[arr.length + blank - 1] ? win[arr.length + blank - 1] : 6, win[arr.length - 1] ? win[arr.length - 1] : 6];
}