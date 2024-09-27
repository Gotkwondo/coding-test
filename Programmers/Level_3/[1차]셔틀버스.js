function solution(n, t, m, timetable) {
  const arriveTimes = Array.from({ length: n }, (_, i) => 9 * 60 + (i * t));
  const sortedTime = timetable.map(e => {
    const [hour, minute] = e.split(':');
    return +hour * 60 + +minute;
  }).sort((a, b) => a - b);
    
  for (let i = 0; i < arriveTimes.length; i++) {
    const cur = arriveTimes[i];
    const p = sortedTime.filter(e => e <= cur);
    const cnt = p.length > m ? m : p.length;
        
    if (i === arriveTimes.length - 1) {
      if (cnt < m) {
        const hour = Math.floor(cur / 60);
        const minute = cur % 60
        return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
      }
      else {
        const target = p[m - 1] - 1;
        const hour = Math.floor(target / 60);
        const minute = target % 60
        return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
      }
    }
        
    for (let j = 0; j < cnt; j++) {
      sortedTime.shift();
    }
  }
}