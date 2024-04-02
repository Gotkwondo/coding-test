// const solution = (brown, yellow) => {
//   const total = brown + yellow;
//   for (let i = 3; i <= brown; i++) {
//     if (total % i === 0) {
//       const height = total / i;
//       if ((height - 2) * (i - 2) === yellow) {
//         return [height, i]
//       }
//     }
//   }
// };

const solution = (brown, yellow) => {
  let answer = [0, 0];
  const total = brown + yellow;
  for (let i = 3; i <= (brown - 2) / 2; i++) {
    if (i * (brown / 2 - i + 2) === total && (i - 2) * (brown / 2 - i) === yellow) {
      if (answer[0] < i) answer = [i, brown / 2 - i + 2];
            
    }
  }
  return answer
};