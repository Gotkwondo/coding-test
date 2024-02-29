// 시간초과 (이유 => 해당 문제는 Map을 이용해 중복확인을 해줘야 한다.)
// const filtPath = __dirname + '/example.txt'; // /dev/stdin
// let input = require('fs').readFileSync(filtPath, 'utf8').toString().trim().split('\n');

// const [_, co] = input.shift().split(' ').map(e => e.trim()); // 전체 명령 수
// const arr = input.map((v) => v.trim()); // 명령 리스트
// let list = [];
// const command = co === "Y" ? 2 : (co === "F" ? 3 : 4);

// arr.forEach(e => {
//   if (!list.includes(e)) list.push(e);
// })

// console.log(Math.floor(list.length / (command - 1)))

const filtPath = __dirname + '/example.txt'; // /dev/stdin
let input = require('fs').readFileSync(filtPath, 'utf8').toString().trim().split('\n');

const [_, co] = input.shift().split(' ').map(e => e.trim());
const arr = input.map((v) => v.trim());
let list = new Map();
const command = co === "Y" ? 2 : (co === "F" ? 3 : 4);

arr.forEach(e => {
  if (!list.has(e)) list.set(e, 0);
})

console.log(Math.floor(list.size / (command - 1)))