const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const gear = input.slice(0, 4).map(e => e.split('').map(Number));
const k = Number(input[4]);
const order = input.slice(5).map(e => e.split(' ').map(Number));

const rotateR = (gear) => {
  const tempAry = [gear[7], ...gear.slice(0, 7)];
  return tempAry;
};

const rotateL = (gear) => {
  const tempAry = [...gear.slice(1), gear[0]];
  return tempAry;
};

for (let i = 0; i < k; i++){
  const [gearNumber, orderType] = order[i];
  const dir = Array.from({ length: 4 }, () => 0);
  dir[gearNumber - 1] = orderType;
  // 왼쪽
  for (let j = gearNumber - 1; j > 0; j--) {
    if (gear[j][6] !== gear[j - 1][2]) {
      dir[j - 1] = -dir[j];
    } else {
      break;
    }
  }

  // 오른쪽
  for (let j = gearNumber - 1; j < 3; j++) {
    if (gear[j][2] !== gear[j + 1][6]) {
      dir[j + 1] = -dir[j];
    } else {
      break;
    }
  }

  for (let j = 0; j < 4; j++){
    if (dir[j] === 1) gear[j] = rotateR(gear[j]);
    else if (dir[j] === -1) gear[j] = rotateL(gear[j]);
  }
}

console.log([1, 2, 4, 8].reduce((acc, cur, idx) => acc + (cur * gear[idx][0]), 0));