const [N, ...arr] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt').toString().trim().split('\n').map(e => e.trim().split(' '));

const Ncase = {
  1: [1],
  2: [2, 4, 8, 6],
  3: [3, 9, 7, 1],
  4: [4, 6],
  5: [5],
  6: [6],
  7: [7, 9, 3, 1],
  8: [8, 4, 2, 6],
  9: [9, 1]
  // 10 이면 예외처리 ㄱㄱ
}
let answer = '';

arr.forEach(e => {
  let [n1, n2] = e;
  
  if (n1 % 10 === 0) {
    answer += '10\n';
  }
  else {
    n1 = n1[n1.length - 1];
    const testN = (+n2 % Ncase[n1].length);
    const idx = testN === 0 ? Ncase[n1].length - 1 : testN - 1;
    answer += `${(Ncase[n1][idx] % 10)}\n`
  }
});

console.log(answer);