const solution = (msg) => {
  const map = new Map();
  const answer = [];
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(65 + i), i + 1);
  }
  for (let i = 0; i < msg.length; i++) {
    let s = msg[i];

    if (map.has(s)) {
      while (true) {
        if (map.has(s + msg[i + 1])) {
          s += msg[i++ + 1]
          continue;
        }
        else {
          answer.push(map.get(s));
          map.set(s + msg[i + 1], map.size + 1);
          break;
        }
      }
    }
  }

  return answer;
};

// const solution = (msg) => {
//   let dic = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
//   let answer = [];
//   let word = '';
//   let indexInDic = 0;
    
//   for (let i = 0; i < msg.length; i++) {
//     word += msg[i];
//     const isExist = dic.indexOf(word);
//     if (isExist !== -1) {
//       indexInDic = isExist;
//     }
//     else {
//       dic.push(word);
//       answer.push(indexInDic + 1);
//       word = '';
//       i--
//     }
//   }
//   answer.push(indexInDic + 1);
//   return answer;
// }