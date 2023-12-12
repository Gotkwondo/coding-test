const solution = (word) => {
  let arr = [];
  const dfs = (str, length) => {
    const vow = [...'AEIOU'];
    if (str.length === length) {
      arr.push(str);
      return;
    }
    vow.forEach((e) => {
      dfs(str + e, length);
    })
  }
  for (let i = 1; i <= 5; i++) {
    dfs('', i);
  }
  return arr.sort().indexOf(word) + 1;
}