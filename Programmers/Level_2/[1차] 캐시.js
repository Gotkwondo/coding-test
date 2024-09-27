const solution = (s) => {
  const test = s.slice(1, s.length - 1).replace(/[{}]/g, '').split(',');
  const map = new Map();

  test.forEach(e => {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    }
    else map.set(e, 1);
  });

  return Array(...map).sort((a, b) => b[1] - a[1]).map(([e, cnt]) => +e);
};

// const solution = (cacheSize, cities) => {
//   if (cacheSize === 0) return cities.length * 5;
    
//   const cache = [];
//   let answer = 0;
    
//   cities = cities.map(e => e.toLowerCase());
    
//   for (let i = 0; i < cities.length; i++) {
//     if (!cache.includes(cities[i])) {
//       if (cache.length >= cacheSize) {
//         cache.shift();
//         cache.push(cities[i]);
//       }
//       else cache.push(cities[i]);
//       answer += 5;
//     }
//     else {
//       const index = cache.indexOf(cities[i]);
//       cache.splice(index, 1);
//       cache.push(cities[i]);
//       answer += 1;
//     }
//   }
//   return answer;
// };

// const solution = (cacheSize, cities) => {
//   let runtime = 0;
//   let Cache = [];
//   const low = cities.map(e => e.toLowerCase());
    
//   if (cacheSize === 0) return cities.length * 5;
    
//   for (let i = 0; i < low.length; i++) {
//     const idx = Cache.indexOf(low[i]);
//     if (idx !== -1) {
//       runtime += 1;
//       Cache.splice(idx, 1);
//       Cache.push(low[i])
//     }
//     else {
//       runtime += 5;
//       if (Cache.length === 0 || Cache.length < cacheSize) {
//         Cache.push(low[i]);
//       }
//       else {
//         Cache.shift();
//         Cache.push(low[i])
//       }
//     }
//   }
//   return runtime;
// };

// const solution = (cacheSize, cities) => {
//   let cache = [];
//   let runtime = 0;
//   let smallCities = cities.map(e => e.toLowerCase())
//   // 캐시의 크기가 0이면 들어가서 hit할 수 있는 경우가 없어지기에 miss가 나는 경우
//   if (cacheSize === 0) {
//     return cities.length * 5;
//   }
//   smallCities.forEach((e, i) => {
//     const idx = cache.indexOf(e);
//     // 있는 경우
//     if (cache.length && cache.includes(e)) {
//       runtime += 1;
//       cache.splice(idx, 1)
//       cache.push(e);
//     }
//     // 없는 경우
//     else {
//       if (cache.length < cacheSize) {
//         cache.push(e);
//       }
//       else {
//         cache.shift();
//         cache.push(e)
//       }
//       runtime += 5;
//     }
//   })
//   return runtime;
// };