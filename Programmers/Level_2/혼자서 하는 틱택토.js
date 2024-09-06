function solution(board) {
  let cnt = 0;
  let oT = 0;
  let xT = 0;
  const center = board[1][1];
    
  board.forEach(el => {
    let oC = 0;
    let xC = 0;
    for (let i = 0; i < 3; i++) {
      if (el[i] === 'O') {
        cnt += 1;
        oC += 1;
      }
      else if (el[i] === 'X') {
        cnt -= 1;
        xC += 1;
      }
    }
    if (oC === 3) oT += 1;
    else if (xC === 3) xT += 1;
  });
    
  for (let i = 0; i < 3; i++) {
    let oC = 0;
    let xC = 0;
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 'O') oC += 1;
      else if (board[j][i] === 'X') xC += 1;
    }
    if (oC === 3) oT += 1;
    else if (xC === 3) xT += 1;
  }
    
  if (center !== '.' && ((center === board[0][0] && center === board[2][2]) || (center === board[0][2] && center === board[2][0]))) {
    center === 'X' ? xT += 1 : oT += 1;
  }
    
  if (cnt < 0) return 0;
  else if ((oT > xT && cnt === 1) || (oT < xT && cnt === 0) || (oT === 0 && xT === 0 && cnt === 0) || (oT === 0 && xT === 0 && cnt === 1)) {
    return 1;
  }
  else return 0;
}