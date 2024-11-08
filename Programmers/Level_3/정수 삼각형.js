const solution = (triangle) => {
  const n = triangle.length;
    
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      }
      else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      }
      else triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }
  return Math.max(...triangle[n - 1]);
}

// // 탑다운 방식
// const solution = (triangle) => {
//   for (let i = 1; i < triangle.length; i++) {
//     for (let j = 0; j < triangle[i].length; j++) {
//       const left = triangle[i - 1][j - 1] ?? 0;
//       const right = triangle[i - 1][j] ?? 0;
//       if (left >= right) {
//         triangle[i][j] += left;
//       }
//       else {
//         triangle[i][j] += right;
//       }
//     }
//   }
//   return Math.max(...triangle[triangle.length - 1]);
// };

// // 바텀업 방식
// const solution = (triangle) => {
//   for (let i = triangle.length - 2; i >= 0; i--) {
//     for (let j = 0; j < triangle[i].length; j++) {
//       triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
//     }
//   }
//   return triangle[0][0];
// };