const solution = (s) => {
  let answer = 0;
  const obj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
    
  for (let i = 0; i < s.length; i++) {
    let stack = [];
    for (let j = 0; j < s.length; j++) {
      if (obj[s[j]] && (obj[s[j]] === stack[stack.length - 1])) {
        stack.pop();
      }
      // if((s[j] === "}" && stack[stack.length - 1] === "{") || (s[j] === "]" && stack[stack.length - 1] === "[") || (s[j] === ")" && stack[stack.length - 1] === "(")){
      //     stack.pop();
      // }
      else {
        stack.push(s[j]);
      }
    }
    s = s.slice(1) + s[0];
    if (stack.length === 0) answer += 1;
  }
  return answer;
};

// const solution = (s) => {
//   let cnt = 0;

//   for (let i = 0; i < s.length; i++) {
//     let stack = [];
        
//     for (let j = 0; j < s.length; j++) {
//       if (stack.length) {
//         if ((s[j] === ']' && stack[stack.length - 1] === '[')
//           || (s[j] === '}' && stack[stack.length - 1] === '{')
//           || (s[j] === ')' && stack[stack.length - 1] === '(')) {
//           stack.pop();
//         }
//         else {
//           stack.push(s[j]);
//         }
//       }
//       else {
//         stack.push(s[j]);
//       }
//     }
//     if (stack.length === 0) {
//       cnt += 1;
//     }
//     s = s.slice(1) + s[0];
//   }
//   return cnt;
// }