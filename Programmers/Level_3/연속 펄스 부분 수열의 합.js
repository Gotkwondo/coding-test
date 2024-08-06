// function solution(sequence) {
//   const arr1 = sequence.map((e, i) => {
//     if (i % 2 === 0) return e;
//     else return -e;
//   });
//   const arr2 = sequence.map((e, i) => {
//     if (i % 2 === 1) return e;
//     else return -e;
//   });
    
//   for (let i = 1; i < sequence.length; i++) {
//     if (arr1[i - 1] + arr1[i] > arr1[i]) arr1[i] = arr1[i - 1] + arr1[i];
//     if (arr2[i - 1] + arr2[i] > arr2[i]) arr2[i] = arr2[i - 1] + arr2[i];
//   }
    
//   return Math.max(Math.max(...arr1), Math.max(...arr2));
// }

function solution(sequence) {
  let answer = 0;
  const temp1 = [];
  const temp2 = [];
    
  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      temp1.push(sequence[i]);
      temp2.push(-sequence[i]);
    }
    else if (i % 2 === 0) {
      temp1.push(Math.max(temp1[i - 1] + sequence[i], sequence[i]));
      temp2.push(Math.max(temp2[i - 1] - sequence[i], -sequence[i]));
    }
    else {
      temp1.push(Math.max(temp1[i - 1] - sequence[i], -sequence[i]));
      temp2.push(Math.max(temp2[i - 1] + sequence[i], sequence[i]));
    }
    answer = Math.max(answer, temp1[i], temp2[i]);
  }
  return answer;
}