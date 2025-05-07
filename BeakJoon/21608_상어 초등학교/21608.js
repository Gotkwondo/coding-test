const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt",
    "utf-8"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = +input.shift();
const students = [];
const map = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => null)
);
const pos = Array.from({ length: n ** 2 }, () => undefined);
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const score = {
  0: 0,
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
};
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const [st, ...arr] = input[i].split(" ").map(Number);
  students.push({
    st: st,
    favorite: arr,
  });
}

for (let i = 0; i < students.length; i++) {
  const { st, favorite } = students[i];

  let [max, maxPos, maxNear] = [0, [], 0];

  // 모든 좌표를 탐색하며 가장 적합한 위치 찾기
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (map[y][x] !== null) continue;

      let favoriteCount = 0;
      let emptyCount = 0;

      for (const [dy, dx] of dir) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

        if (favorite.includes(map[ny][nx])) favoriteCount++;
        if (map[ny][nx] === null) emptyCount++;
      }

      if (
        favoriteCount > max ||
        (favoriteCount === max &&
          (emptyCount > maxNear ||
            (emptyCount === maxNear &&
              (maxPos.length === 0 ||
                y < maxPos[0] ||
                (y === maxPos[0] && x < maxPos[1])))))
      ) {
        max = favoriteCount;
        maxPos = [y, x];
        maxNear = emptyCount;
      }
    }
  }

  map[maxPos[0]][maxPos[1]] = st;
  pos[st - 1] = maxPos;
}

// 이건 타입에러 난 코드 => 첫 번째 값을 할당할 때 인덱싱이 잘못됨
// for (let i = 0; i < students.length; i++) {
//   const { st, favorite } = students[i];
//   // if (i === 0) {
//   //   map[1][1] = st;
//   //   pos[st - 1] = [1, 1];
//   //   continue;
//   // }

//   const checkMap = {};
//   let [max, maxPos, maxNear] = [0, [], 0];
//   for (let j = 0; j < 4; j++) {
//     if (pos[favorite[j] - 1] !== undefined) {
//       const [cy, cx] = pos[favorite[j] - 1];
//       for (let [dy, dx] of dir) {
//         const [ny, nx] = [cy + dy, cx + dx];
//         if (ny >= 0 && ny < n && nx >= 0 && nx < n && map[ny][nx] === null) {
//           let nearNull = 0;

//           for (let d = 0; d < 4; d++) {
//             const [y, x] = dir[d];
//             const [nearY, nearX] = [ny + y, nx + x];
//             if (
//               nearY >= 0 &&
//               nearY < n &&
//               nearX >= 0 &&
//               nearX < n &&
//               map[nearY][nearX] === null
//             )
//               nearNull += 1;
//           }

//           if (!checkMap[ny]) {
//             checkMap[ny] = {};
//             if (!checkMap[ny][nx]) checkMap[ny][nx] = 1;
//             else checkMap[ny][nx] += 1;
//           } else {
//             if (!checkMap[ny][nx]) checkMap[ny][nx] = 1;
//             else checkMap[ny][nx] += 1;
//           }
//           // 1번
//           if (max <= checkMap[ny][nx]) {
//             // 2번
//             if (max === checkMap[ny][nx]) {
//               if (maxNear === nearNull) {
//                 if (ny < maxPos[0]) {
//                   max = checkMap[ny][nx];
//                   maxPos = [ny, nx];
//                   maxNear = nearNull;
//                 } else if (ny === maxPos[0] && nx < maxPos[1]) {
//                   max = checkMap[ny][nx];
//                   maxPos = [ny, nx];
//                   maxNear = nearNull;
//                 }
//               } else if (maxNear < nearNull) {
//                 max = checkMap[ny][nx];
//                 maxPos = [ny, nx];
//                 maxNear = nearNull;
//               }
//             } else {
//               max = checkMap[ny][nx];
//               maxPos = [ny, nx];
//               maxNear = nearNull;
//             }
//           }
//         }
//       }
//     }
//   }
//   if (maxPos.length === 0) {
//     map[1][1] = st;
//     pos[st - 1] = [1, 1];
//     console.log(max, maxPos, maxNear);
//   }
//   else {
//     map[maxPos[0]][maxPos[1]] = st;
//     pos[st - 1] = [maxPos[0], maxPos[1]];
//   }
// }

for (let i = 0; i < students.length; i++) {
  const { st, favorite } = students[i];
  const [cy, cx] = pos[st - 1];
  let cnt = 0;
  for (let [dy, dx] of dir) {
    const [ny, nx] = [cy + dy, cx + dx];
    if (
      ny >= 0 &&
      ny < n &&
      nx >= 0 &&
      nx < n &&
      favorite.includes(map[ny][nx])
    ) {
      cnt += 1;
    }
  }
  answer += score[cnt];
}
console.log(answer);
