const solution = (n, t, m, p) => {
  const st = Array.from({ length: t * m }, (_, i) => i.toString(n)).join('').toUpperCase().split('');
  p -= 1;
  const test = st.reduce((acc, cur, idx) => {
    if (idx === p) {
      p += m;
      return acc + cur;
    }
    return acc;
  }, '');
    
  return test.slice(0, t);
};

// const solution = (n, t, m, p) => {
//   let answer = '';
//   let arr = [];
//   for (let i = 0; i < t * m; i++) {
//     arr.push(i.toString(n));
//   }
//   const str = arr.join('');
//   for (let i = p - 1; i < str.length; i += m) {
//     answer += str[i];
//     if (answer.length === t) return answer.toUpperCase();
//   }
// }