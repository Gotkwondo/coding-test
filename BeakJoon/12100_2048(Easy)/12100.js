const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [n] = input.shift();
let map = input.slice();
let answer = 0;

const sum = (arr) => {
  let que = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) continue;
    else if (arr[i] === arr[i + 1]) {
      que.push(arr[i] * 2);
      arr[i + 1] = 0;
    }
    else {
      que.push(arr[i]);
    }
  }
  if (arr[arr.length - 1] !== 0) que.push(arr[arr.length - 1]);
  return que;
};

const obj = {
  move0: (arr) => {
    for (let i = 0; i < n; i++) {
      let line = [];
      for (let j = 0; j < n; j++) {
        if (arr[i][j] !== 0) {
          line.push(arr[i][j]);
          arr[i][j] = 0;
        }
      }
      if (line.length > 0) {
        const sumResult = sum(line);
        for (let j = 0; j < sumResult.length; j++) {
          arr[i][j] = sumResult[j];
        }
      }
    }
    return arr;
  },
  move1: (arr) => {
    for (let i = 0; i < n; i++) {
      let line = [];
      for (let j = n - 1; j >= 0; j--) {
        if (arr[i][j] !== 0) {
          line.push(arr[i][j]);
          arr[i][j] = 0;
        }
      }
      if (line.length > 0) {
        const sumResult = sum(line);
        for (let j = 0; j < sumResult.length; j++) {
          arr[i][n - 1 - j] = sumResult[j];
        }
      }
    }
    return arr;
  },
  move2: (arr) => {
    for (let i = 0; i < n; i++) {
      let line = [];
      for (let j = 0; j < n; j++) {
        if (arr[j][i] !== 0) {
          line.push(arr[j][i]);
          arr[j][i] = 0;
        }
      }
      if (line.length > 0) {
        const sumResult = sum(line);
        for (let j = 0; j < sumResult.length; j++) {
          arr[j][i] = sumResult[j];
        }
      }
    }
    return arr;
  },
  move3: (arr) => {
    for (let i = 0; i < n; i++) {
      let line = [];
      for (let j = n - 1; j >= 0; j--) {
        if (arr[j][i] !== 0) {
          line.push(arr[j][i]);
          arr[j][i] = 0;
        }
      }
      if (line.length > 0) {
        const sumResult = sum(line);
        for (let j = 0; j < sumResult.length; j++) {
          arr[n - 1 - j][i] = sumResult[j];
        }
      }
    }
    return arr;
  }   
};

const copyArray = (arr) => {
  let copied = [];

  arr.forEach((v) => {
    copied.push([...v]);
  });
  return copied;
};

const dfs = (arr, cnt) => {
  if (cnt === 5) {
    arr.forEach(e => {
      answer = Math.max(answer, ...e);
    })
    return;
  }
  else {
    for (let i = 0; i < 4; i++) {
      let copied = copyArray(arr);
      dfs(obj[`move${i}`](copied), cnt + 1);
    }
  }
};

dfs(map, 0);

console.log(answer);