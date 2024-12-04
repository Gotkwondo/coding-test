const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const t = +input.shift();
const answer = [];

for (let i = 0; i < t * 3; i += 3){
  const command = input[i].split('');
  const n = +input[i + 1];
  const arr = JSON.parse(input[i + 2]);
  let [lp, rp] = [0, arr.length - 1];
  let flag = false;
  let test = true
  
  for (let i = 0; i < command.length; i++){
    if (command[i] === 'R') test = !test;
    else { 
      if (lp > rp) {
        flag = true;
        break;
      }
      if (test) {
        lp++;
      }
      else {
        rp--;
      }
    }
  }
  if (flag) answer.push('error');
  else answer.push(`[${test ? arr.slice(lp, rp + 1) : arr.slice(lp, rp + 1).reverse()}]`);
}
console.log(answer.join('\n'));