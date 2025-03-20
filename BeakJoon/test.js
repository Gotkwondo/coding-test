const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

let st = input.shift();
const list = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let cro of list) {
  st = st.replaceAll(cro, 'q');
}

console.log(st.length);