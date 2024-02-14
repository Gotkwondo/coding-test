const solution = (babbling) => {
  const list = ["aya", "ye", "woo", "ma"];
  const result = babbling.filter(e => {
    let el = e;
        
    for (const li of list) {
      if (e.includes(li.repeat(2))) return false;
      el = el.split(li).join(' ');
    }
    if (el.split(' ').join('').length === 0) return true;
  })
  return result.length;
}