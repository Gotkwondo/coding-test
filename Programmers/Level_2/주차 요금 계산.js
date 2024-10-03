const solution = (fees, records) => {
  const map = new Map();
  const [dT, dF, aT, aF] = fees;
    
  records.forEach((e) => {
    const [t, car, type] = e.split(' ');
    const [h, m] = t.split(':');
    const time = (+h * 60) + (+m);
        
    if (type === "IN") {
      map.set(car, map.has(car) ? map.get(car) + (1439 - time) : (1439 - time));
    }
    else {
      map.set(car, map.has(car) ? map.get(car) - (1439 - time) : (1439 - time));
    }
  });
  return [...map].sort((a, b) => a[0] - b[0]).map(([car, time]) => time > dT ? dF + (Math.ceil((time - dT) / aT) * aF) : dF);
}