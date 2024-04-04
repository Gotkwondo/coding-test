// const solution = (n, words) => {
//   let answer = [];

//   // 탈락한 사람의 순서는 %n을 했을 때 알 수 있다.
//   for (let i = 0; i < words.length; i++) {
//     if (answer.length) break;
//     if (i > 0) {
//       if (words[i][0] !== words[i - 1].slice(-1) || i !== words.indexOf(words[i]) || words[i].length === 1) {
//         const num1 = (i % n) + 1;
//         const num2 = (i + 1) % n === 0 ? (i + 1) / n : Math.ceil((i + 1) / n)
//         answer.push(num1, num2)
//       }
//     }
//   }
//   if (!answer.length) return [0, 0]
//   return answer;
// }

const solution = (n, words) => {
  let answer = [0, 0];
  const obj = {};
    
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i === 0) {
      obj[word] = 1;
    }
    else if (!obj[word] && words[i - 1][words[i - 1].length - 1] === word[0]) {
      obj[word] = 1;
    }
    else {
      answer = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    }
  }
  return answer;
};