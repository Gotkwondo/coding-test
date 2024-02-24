const solution = (board, moves) => {
  const stack = [];
  let cnt = 0;

  for (let i = 0; i < moves.length; i++) {
    let y = 0;
        
    while ((board[y][moves[i] - 1] === 0) && y < board.length) {
      y += 1;
      if (y === board.length) break;
    }
    if (y === board.length) continue;
    const sl = board[y][moves[i] - 1];
    board[y][moves[i] - 1] = 0;
    stack.push(sl);
    if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.splice(-2, 2);
      cnt += 2;
    }
  }
  return cnt;
}