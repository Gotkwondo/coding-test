const [N, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

  

console.log(answer.join('\n'));