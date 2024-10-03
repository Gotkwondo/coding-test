const solution = (record) => {
  const map = new Map();
  const res = [];
  const message = {
    "Enter": "들어왔습니다.",
    "Leave": "나갔습니다."
  }
    
  for (let i = 0; i < record.length; i++) {
    const [type, uId, nick] = record[i].split(' ');
    if (type === 'Enter') {
      map.set(uId, nick);
      res.push([uId, type]);
    }
    else if (type === 'Leave') {
      res.push([uId, type]);
    }
    else {
      map.set(uId, nick);
    }
  }
    
  return res.map(([id, t]) => `${map.get(id)}님이 ${message[t]}`)
}