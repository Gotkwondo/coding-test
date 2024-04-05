// const solution = (people, limit) => {
//   let answer = 0;
//   people.sort((a, b) => a - b);

//   let fmen = 0;
//   let lmen = people.length - 1;

//   while (fmen <= lmen) {
//     //  혼자 남았을 때
//     if (fmen === lmen) {
//       answer += 1;
//       break;
//     }
//     else if (people[fmen] + people[lmen] <= limit) {
//       fmen += 1;
//       lmen -= 1;
//       answer += 1;
//     }
//     else {
//       lmen -= 1;
//       answer += 1;
//     }
//   }

//   return answer;
// }

const solution = (people, limit) => {
  let arr = people.sort((a, b) => a - b);
  let answer = 0;
    
  while (arr.length) {
    const big = arr.pop();
    if (arr[0] + big <= limit) {
      arr.shift();
      answer += 1;
    }
    else {
      answer += 1;
    }
  }
  return answer;
};