// import dd from "./example.txt";
const filtPath = __dirname + '/example.txt';
let input = require('fs').readFileSync(filtPath, 'utf8').toString().trim().split('\n'); // /dev/stdin

const n = Number(input.shift()); // 전체 사람 수
const [a, b] = input.shift().split(' ').map(Number); // a, b 두 사람의 번호
const m = Number(input.shift()); // 관계의 개수
const arr = input.map((v) => v.split(' ').map(Number)); // 부모-자식 관계 배열

let answer = 0;
let visited = Array(n + 1).fill(false);
let graph = [...Array(n + 1)].map(() => []);

arr.forEach(([st, en]) => {
  graph[st].push(en);
  graph[en].push(st);
})

// 재귀 함수 이용
const dfs = (start, depth) => {
  if (start === b) answer = depth;
  for (const li of graph[start]) {
    if (!visited[li]) {
      visited[li] = true;
      dfs(li, depth + 1);
    }
  }
};
dfs(a, 0);

console.log(answer ? answer : -1)