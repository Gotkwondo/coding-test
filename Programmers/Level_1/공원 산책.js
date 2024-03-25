const solution = (park, routes) => {
  let map = park.map(e => e.split(''));
  const [xL, yL] = [map[0].length, map.length];
  let pos;   // [y, x]
    
  const check = {
    N: (posY, posX, bl) => {
      for (let i = 1; i <= bl; i++) {
        if (map[posY - i][posX] === 'X') return false;
      }
      return true;
    },
    S: (posY, posX, bl) => {
      for (let i = 1; i <= bl; i++) {
        if (map[posY + i][posX] === 'X') return false;
      }
      return true;
    },
    W: (posY, posX, bl) => {
      for (let i = 1; i <= bl; i++) {
        if (map[posY][posX - i] === 'X') return false;
      }
      return true;
    },
    E: (posY, posX, bl) => {
      for (let i = 1; i <= bl; i++) {
        if (map[posY][posX + i] === 'X') return false;
      }
      return true;
    },
  }
    
  map.forEach((el, idx) => {
    el.forEach((e, i) => {
      if (e === 'S') pos = [idx, i];
    })
  })
    
  for (let i = 0; i < routes.length; i++) {
    const [di, bl] = routes[i].split(' ');
        
    if (di === 'N' && pos[0] - +bl >= 0 && map[pos[0] - +bl][pos[1]] !== "X") {
      if (check.N(pos[0], pos[1], bl)) pos[0] -= +bl;
    }
    else if (di === 'S' && pos[0] + +bl < yL && map[pos[0] + +bl][pos[1]] !== "X") {
      if (check.S(pos[0], pos[1], bl)) pos[0] += +bl;
    }
    else if (di === 'W' && pos[1] - +bl >= 0 && map[pos[0]][pos[1] - +bl] !== "X") {
      if (check.W(pos[0], pos[1], bl)) pos[1] -= +bl;
    }
    else if (di === 'E' && pos[1] + +bl < xL && map[pos[0]][pos[1] + +bl] !== "X") {
      if (check.E(pos[0], pos[1], bl)) pos[1] += +bl;
    }
  }
    
  return pos;
}