const solution = (players, callings) => {
  const obj = {};
    
  players.forEach((e, i) => {
    obj[e] = i + 1;
  });
    
  for (let i = 0; i < callings.length; i++) {
    const index = obj[callings[i]] - 1;
        
    if (index > 0 && index != undefined) {
      let temp = players[index - 1];
      players[index - 1] = players[index];
      players[index] = temp;
      obj[players[index - 1]] = index;
      obj[players[index]] = index + 1;
    }
  }
    
  return players;
}