const solution = (n, t, m, p) => {
  let answer = '';
  let arr = [];
  for (let i = 0; i < t * m; i++) {
    arr.push(i.toString(n));
  }
  const str = arr.join('');
  for (let i = p - 1; i < str.length; i += m) {
    answer += str[i];
    if (answer.length === t) return answer.toUpperCase();
  }
}