const solution = (word) => {
  let answer = [];
  const v = ['A', 'E', 'I', 'O', 'U'];

  const dfs = (n, l) => {
    if (n.length === l) {
      answer.push(n);
      return;
    }
    else {
      v.forEach(e => {
        dfs(n + e, l);
      })
    }
  }
  for (let i = 1; i <= 5; i++) {
    dfs('', i);
  }
  return answer.sort().indexOf(word) + 1;
};

// const solution = (word) => {
//   let arr = [];
//   const dfs = (str, length) => {
//     const vow = [...'AEIOU'];
//     if (str.length === length) {
//       arr.push(str);
//       return;
//     }
//     vow.forEach((e) => {
//       dfs(str + e, length);
//     })
//   }
//   for (let i = 1; i <= 5; i++) {
//     dfs('', i);
//   }
//   return arr.sort().indexOf(word) + 1;
// }