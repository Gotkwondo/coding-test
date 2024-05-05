const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const [N, L] = input.shift().split(' ');
let arr = input.map(e => e.trim());

// 두 번째 문제 풀이 방법( Set 자료구조를 이용해 중복된 요소를 정리, 
// reverse()메서드를 이용해 뒤에서 부터 중복 처리 후 원래대로 
// reverse()를 이용해 정답 도출 )
let set = new Set(arr.reverse())
let answer = [...set].reverse().slice(0, N).join('\n')
console.log(answer)


// 첫 번째 문제 풀이 방법(객체를 이용한 풀이)
// let obj = {};

// arr.forEach((e, i) => {
//   obj[e] = i;
// })

// let answer = Object.entries(obj).sort((a, b) => a[1] - b[1]).slice(0, N).map(e => e[0]).join('\n');
// console.log(answer)