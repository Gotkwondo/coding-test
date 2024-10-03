const solution = (numbers, hand) => {
  let answer = "";
  const map = {
    "1": [0, 0],
    "2": [0, 1],
    "3": [0, 2],
    "4": [1, 0],
    "5": [1, 1],
    "6": [1, 2],
    "7": [2, 0],
    "8": [2, 1],
    "9": [2, 2],
    "0": [3, 1],
  }
  let [lh, rh] = [[3, 0], [3, 2]];
    
  const check = (target, l, r, ha) => {
    const ld = Math.abs(target[0] - l[0]) + Math.abs(target[1] - l[1]);
    const rd = Math.abs(target[0] - r[0]) + Math.abs(target[1] - r[1]);
        
    if (ld === rd) {
      return ha === 'right' ? 'R' : 'L';
    }
    else if (ld > rd) return 'R';
    else return 'L';
  }
    
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
        
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      lh = map[num];
    }
    else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      rh = map[num];
    }
    else {
      const resultHand = check(map[num], lh, rh, hand);
      answer += resultHand;
      if (resultHand === 'L') {
        lh = map[num];
      }
      else {
        rh = map[num]
      }
    }
  }
  return answer;
}

// const solution = (numbers, hand) => {
//   let answer = "";
//   const map = {
//     "1": [0, 0],
//     "2": [0, 1],
//     "3": [0, 2],
//     "4": [1, 0],
//     "5": [1, 1],
//     "6": [1, 2],
//     "7": [2, 0],
//     "8": [2, 1],
//     "9": [2, 2],
//     "0": [3, 1],
//   }
//   const position = [[3, 0], [3, 2]];
    
//   // gP: 목표 위치, lP: 왼손 위치, rP: 오른손 위치
//   const check = (gP, lP, rP) => {
//     const lDistance = Math.abs(gP[0] - lP[0]) + Math.abs(gP[1] - lP[1]);
//     const rDistance = Math.abs(gP[0] - rP[0]) + Math.abs(gP[1] - rP[1]);
//     if (lDistance === rDistance) {
//       return "S";
//     }
//     else if (lDistance > rDistance) return "R"
//     else return "L"
//   }
    
//   numbers.forEach((e, i) => {
//     // 왼쪽에 있는 키(1, 4, 7)
//     if (e === 1 || e === 4 || e === 7) {
//       answer += "L";
//       position[0] = map[`${e}`];
//     }
//     // 오른쪽에 있는 키(3, 6, 9)
//     else if (e === 3 || e === 6 || e === 9) {
//       answer += "R";
//       position[1] = map[`${e}`];
//     }
//     // 중간에 있는 키(2, 5, 8, 0)
//     else {
//       const goalPos = map[`${e}`];
//       const checkRes = check(goalPos, position[0], position[1]);
//       if (checkRes === "S" && hand === "left") {
//         answer += "L";
//         position[0] = map[`${e}`];
//       }
//       else if (checkRes === "S" && hand === "right") {
//         answer += "R";
//         position[1] = map[`${e}`];
//       }
//       else {
//         answer += checkRes;
//         position[checkRes === 'L' ? 0 : 1] = map[`${e}`];
//       }
//     }
//   })
//   return answer;
// }