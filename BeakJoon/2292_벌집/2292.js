const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

let n = +input.shift();

if (n === 1) console.log(1);
else {
  let cnt = 1;
  let [min, max] = [2, 7];
  while (true) {
    if (n >= min && n <= max) {
      console.log(cnt + 1);
      break;
    }
    else {
      cnt++;
      min += (6 * (cnt - 1));
      max += (6 * cnt);
    }
  }
}