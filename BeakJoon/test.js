const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [height, width] = input.shift();
let map = input.slice();
let answer = 0;

//ㅇㅇㅇㅇ 인 블럭
const case1 = (i, j) => {
  if (j + 3 < width) {
    return map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i][j + 3];
  }
  return 0;
}

//ㅇ 인 모양
//ㅇ
//ㅇ
//ㅇ
const case2 = (i, j) => {
  if (i + 3 < height) {
    return map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 3][j];
  }
  return 0;
}

//ㅇㅇ
//ㅇㅇ 인 모양
const case3 = (i, j) => {
  if (i + 1 < height && j + 1 < width) {
    return map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 1][j + 1];
  }
  return 0;
}

//ㅇ
//ㅇ
//ㅇㅇ 인 모양
const case4 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j + 1];
  }
  return 0;
}

//ㅇㅇㅇ
//ㅇ    인 모양
const case5 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j];
  }
  return 0;
}

//ㅇㅇ
//  ㅇ
//  ㅇ 인 모양
const case6 = (i, j) => {
  if (i+2 < height && j+1 < width) {
    return map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
  }
  return 0;
}

//    ㅇ
//ㅇㅇㅇ 인 모양
const case7 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i+1][j] + map[i + 1][j+1] + map[i + 1][j + 2] + map[i][j + 2];
  }
  return 0;
}

//ㅇㅇ
//ㅇ
//ㅇ  인 모양
const case8 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 2][j];
  }
  return 0;
}

//ㅇㅇㅇ
//    ㅇ 인 모양
const case9 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 2];
  }
  return 0;
}

//  ㅇ
//  ㅇ
//ㅇㅇ 인 모양
const case10 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i + 2][j] + map[i + 2][j + 1] + map[i + 1][j + 1] + map[i][j + 1];
  }
  return 0;
}

//ㅇ
//ㅇㅇㅇ 인 모양
const case11 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2];
  }
  return 0;
}

//ㅇ
//ㅇㅇ
//  ㅇ 인 모양
const case12 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j + 1];
  }
  return 0;
}

//  ㅇㅇ
//ㅇㅇ   인 모양
const case13 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i+1][j] + map[i+1][j + 1] + map[i][j + 1] + map[i][j + 2];
  }
  return 0;
}

//  ㅇ
//ㅇㅇ
//ㅇ   인 모양
const case14 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i + 1][j] + map[i + 2][j] + map[i + 1][j + 1] + map[i][j + 1];
  }
  return 0;
}

//ㅇㅇ
//  ㅇㅇ 인 모양
const case15 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 1][j + 2];
  }
  return 0;
}

//  ㅇ
//ㅇㅇㅇ 인 모양
const case16 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j + 1] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2];
  }
  return 0;
}

//ㅇ
//ㅇㅇ
//ㅇ  인 모양
const case17 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 1][j + 1];
  }
  return 0;
}

//ㅇㅇㅇ
//  ㅇ  인 모양
const case18 = (i, j) => {
  if (i + 1 < height && j + 2 < width) {
    return map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 1];
  }
  return 0;
}

//  ㅇ
//ㅇㅇ
//  ㅇ 인 모양
const case19 = (i, j) => {
  if (i + 2 < height && j + 1 < width) {
    return map[i + 1][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
  }
  return 0;
}

for (let i = 0; i < height; i++){
  for (let j = 0; j < width; j++) {
    answer = Math.max(answer,
      case1(i, j),
      case2(i, j),
      case3(i, j),
      case4(i, j),
      case5(i, j),
      case6(i, j),
      case7(i, j),
      case8(i, j),
      case9(i, j),
      case10(i, j),
      case11(i, j),
      case12(i, j),
      case13(i, j),
      case14(i, j),
      case15(i, j),
      case16(i, j),
      case17(i, j),
      case18(i, j),
      case19(i, j),
    )
  }
}

console.log(answer)