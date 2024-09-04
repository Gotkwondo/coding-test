function solution(cards) {
  let result = [];
    
  for (let i = 0; i < cards.length; i++) {
    const que = [i + 1];
    let arr = [i + 1];
        
    while (que.length) {
      const idx = que.shift();
            
      if (arr.includes(cards[idx - 1])) {
        break;
      }
      else {
        que.push(cards[idx - 1]);
        arr.push(cards[idx - 1]);
      }
    }
    if (i === 0 && arr.length === cards.length) {
      return 0;
    }
        
    arr = arr.sort((a, b) => a - b).join(' ');
        
    if (!result.includes(arr)) {
      result.push(arr);
    }
    else continue;
  }
  result = result.map(e => e.split(' ').length).sort((a, b) => b - a);
  return result[0] * result[1];
}