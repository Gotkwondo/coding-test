// const solution = (n, a, b) => {
//   let cnt = 0;
    
//   while (a !== b) {
//     a = Math.ceil(a / 2);
//     b = Math.ceil(b / 2);
//     cnt++;
//   }
//   return cnt
// }

const solution = (n, a, b) => {
  let [A, B] = [a, b];
  let answer = 0;
  while (true) {
    if (A === B) break;
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    answer += 1;
  }
  return answer;
};