const solution = (m, n, board) => {
  const map = board.map(el => el.split(''));

  while (true) {
    const arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 1; j < n; j++) {
        if (map[i][j] !== '.' && map[i][j] === map[i][j - 1] && map[i][j - 1] === map[i + 1][j - 1] && map[i + 1][j - 1] === map[i + 1][j]) {
          arr.push([i, j]);
        }
      }
    }

    if (!arr.length) return map.reduce((acc, cur) => acc + cur.filter(e => e === '.').length, 0);

    for (let i = 0; i < arr.length; i++) {
      const [y, x] = arr[i];
      map[y][x] = '.';
      map[y][x - 1] = '.';
      map[y + 1][x - 1] = '.';
      map[y + 1][x] = '.';
    }

    for (let i = m - 1; i > 0; i--) {
      if (!map[i].some(e => e === '.')) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && map[i][j] === '.'; k--) {
          if (map[k][j] !== '.') {
            map[i][j] = map[k][j];
            map[k][j] = '.';
            break;
          }
        }
      }
    }
  }
}

// const solution = (m, n, board) => {
//   let map = board.map(el => {
//     return el.split('');
//   });
    
//   while (true) {
//     let que = [];
        
//     for (let i = 0; i < m - 1; i++) {
//       for (let j = 0; j < n - 1; j++) {
//         if (map[i][j] &&
//           map[i][j] === map[i][j + 1] &&
//           map[i][j] === map[i + 1][j] &&
//           map[i][j] === map[i + 1][j + 1]
//         ) {
//           que.push([i, j]);
//         }
//       }
//     }
//     if (que.length === 0) {
//       break;
//     }
        
//     // 블럭 깨기
//     for (let i = 0; i < que.length; i++) {
//       const [y, x] = que[i];
            
//       map[y][x] = 0;
//       map[y][x + 1] = 0;
//       map[y + 1][x] = 0;
//       map[y + 1][x + 1] = 0;
//     }
        
//     // 블럭 땡기기
//     for (let i = m - 1; i > 0; i--) {
            
//       if (!map[i].some(e => !e)) continue;
            
//       for (let j = 0; j < n; j++) {
//         for (let k = i - 1; k >= 0
//           && !map[i][j]; k--
//         ) {
//           if (map[k][j]) {
//             map[i][j] = map[k][j];
//             map[k][j] = 0;
//             break;
//           }
//         }
//       }
//     }
//   }
//   return map.flat().filter(e => e === 0).length
// };