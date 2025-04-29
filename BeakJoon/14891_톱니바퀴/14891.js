const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const gear = input.slice(0, 4).map((e) => e.split("").map(Number));
const k = Number(input[4]);
const order = input.slice(5).map((e) => e.split(" ").map(Number));

const rotateR = (gear) => {
  const tempAry = [gear[7], ...gear.slice(0, 7)];
  return tempAry;
};

const rotateL = (gear) => {
  const tempAry = [...gear.slice(1), gear[0]];
  return tempAry;
};

for (let i = 0; i < k; i++) {
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

  for (let j = 0; j < 4; j++) {
    if (dir[j] === 1) gear[j] = rotateR(gear[j]);
    else if (dir[j] === -1) gear[j] = rotateL(gear[j]);
  }
}

console.log(
  [1, 2, 4, 8].reduce((acc, cur, idx) => acc + cur * gear[idx][0], 0)
);

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
//   .toString().trim().split('\n')

// let arr = input.slice(0, 4).map(e => e.split('').map(Number));
// const N = input[4];
// const command = input.slice(5).map(e => e.split(' ').map(Number));

// const rotateL = (pos, dir) => {
//   let result = [];
//   let posBolt = arr[pos - 1];
//   let leftList = arr.slice(0, pos - 1);
//   for (let i = leftList.length - 1; i >= 0; i--) {
//     let leftBolt = leftList[i];
//     let nextCur;
//     if (posBolt[6] !== leftBolt[2]) {
//       if (dir === 1) {
//         nextCur = [...leftBolt.slice(1), leftBolt[0]];
//         posBolt = leftBolt;
//         dir = -1;
//         result.push([i, nextCur]);
//       }
//       else {
//         nextCur = [leftBolt.at(-1), ...leftBolt.slice(0, 7)];
//         posBolt = leftBolt;
//         dir = 1;
//         result.push([i, nextCur]);
//       }
//     } else {
//       break;
//     }
//   }
//   return result;
// };

// const rotateR = (pos, dir) => {
//   let result = [];
//   let posBolt = arr[pos - 1];
//   let rightList = arr.slice(pos);

//   for (let i = 0; i < rightList.length; i++) {
//     let rightBolt = rightList[i];
//     let nextCur;
//     if (posBolt[2] !== rightBolt[6]) {
//       if (dir === 1) {
//         nextCur = [...rightBolt.slice(1), rightBolt[0]];
//         posBolt = rightBolt;
//         dir = -1;
//         result.push([i, nextCur]);
//       }
//       else {
//         nextCur = [rightBolt.at(-1), ...rightBolt.slice(0, 7)];
//         posBolt = rightBolt;
//         dir = 1;
//         result.push([i, nextCur]);
//       }
//     } else {
//       break;
//     }
//   }
//   return result;
// };

// for (let i = 0; i < N; i++) {
//   const [pos, dir] = command[i];
//   const right = rotateR(pos, dir);
//   const left = rotateL(pos, dir);
//   if (right.length > 0) {
//     right.forEach(e => {
//       const [idx, a] = e;
//       arr[pos + idx] = a;
//     });
//   }
//   if (left.length > 0) {
//     left.forEach(e => {
//       const [idx, a] = e;
//       arr[idx] = a;
//     });
//   }
//   if (dir === 1) {
//     arr[pos - 1] = [arr[pos - 1].at(-1), ...arr[pos - 1].slice(0,7)];
//   }
//   else {
//     arr[pos - 1] = [...arr[pos - 1].slice(1, 8), arr[pos - 1][0]];
//   }
// }
// console.log(`${arr.reduce((acc, cur, idx) => acc + (cur[0] === 1 ? 2 ** idx : 0), 0)}`)
