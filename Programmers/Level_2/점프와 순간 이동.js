// const solution = (n) => {
//   let answer = 1;
//   if (n > 1) {
//     while (true) {
//       if (n === 1) {
//         return answer;
//       }
//       else {
//         if (n % 2 === 0) {
//           n = n / 2;
//         }
//         else {
//           n -= 1;
//           answer += 1;
//         }
//       }
//     }
//   }
//   return answer;
// }

const solution = (n) => {
  let answer = 0;
  if (n === 1) return 1;
  while (true) {
    if (n === 1) {
      return answer + 1;
    }
    else {
      if (n % 2 === 0) {
        n = n / 2;
      }
      else {
        n -= 1;
        answer += 1;
      }
    }
  }
};