function solution(n, weak, dist) {
  const getPermutation = (arr, n) => {
    if (n === 1) return arr.map((e) => [e]);
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const perm = getPermutation(rest, n - 1);
      const permArr = perm.map((e) => [arr[i], ...e]);
      res.push(...permArr);
    }
    return res;
  };

  let arr = Array.from(
    { length: weak.length * 2 },
    (_, i) => weak[i % weak.length] + (i >= weak.length ? n : 0)
  );
  dist.sort((a, b) => b - a);

  //     for(let i = 1; i <= dist.length; i++){
  //         const permutation = getPermutation(dist, i);

  //         for(let j = 0; j < weak.length; j++){
  //             for(let perm of permutation){
  //                 let range = arr.slice(j, j + weak.length);
  //                 for(let p of perm){
  //                     range = range.filter(e => e > range[0] + p);
  //                     if(range.length === 0) return i;
  //                 }
  //             }
  //         }
  //     }

  for (let i = 1; i <= dist.length; i++) {
    const permutation = getPermutation(dist, i);

    for (let perm of permutation) {
      for (let j = 0; j < weak.length; j++) {
        let end = arr.slice(j, j + weak.length);
        for (let p of perm) {
          end = end.filter((e) => e > end[0] + p);
          if (end.length === 0) return i;
        }
      }
    }
  }
  return -1;
}
