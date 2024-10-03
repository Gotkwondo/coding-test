const solution = (board, moves) => {
  const stack = [];
  let answer = 0;
    
  const getIdx = (board, line) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][line] > 0) {
        return i;
      }
    }
    return -1;
  }
    
  for (let i = 0; i < moves.length; i++) {
    const line = moves[i] - 1;
    const arr = board[line];
    const idx = getIdx(board, line);
    if (idx === -1) continue;
    else {
      stack.push(board[idx][line]);
      board[idx][line] = 0;
    }
        
    if (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }
  return answer;
}

// const solution = (board, moves) => {
//   const stack = [];
//   let cnt = 0;

//   for (let i = 0; i < moves.length; i++) {
//     let y = 0;
        
//     while ((board[y][moves[i] - 1] === 0) && y < board.length) {
//       y += 1;
//       if (y === board.length) break;
//     }
//     if (y === board.length) continue;
//     const sl = board[y][moves[i] - 1];
//     board[y][moves[i] - 1] = 0;
//     stack.push(sl);
//     if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
//       stack.splice(-2, 2);
//       cnt += 2;
//     }
//   }
//   return cnt;
// }