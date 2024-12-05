const getComb = (k, n, arr) => {
  const res = [];
  if (n <= 0) return false;
  if (k === 1) return [[...arr, n]];
  for (let i = 1; i < n; i++) {
    const temp = getComb(k - 1, n - i, [...arr, i]);
    if (!temp) break;
    res.push(...temp);
  }
  return res;
}

function solution(k, n, reqs) {
  const combs = getComb(k, n, []);
  let answer = Infinity;

  for (let comb of combs) {
    const temp = [];
    let totalTime = 0;
    for (let i = 0; i < comb.length; i++) {
      for (let j = 0; j < comb[i]; j++) {
        temp.push({
          type: i + 1,
          end: 0
        });
      }
    }

    for (let [st, req, type] of reqs) {
      let mintemp = {
        end: Infinity
      };

      // 이건 됨
      for (const t of temp) {
        if (t.type === type && t.end < mintemp.end) {
          mintemp = t;
        }
      }

      // 이건 안됨
      // if(temp[type - 1].end < mintemp.end){
      //     mintemp = temp[type - 1];
      // }

      if (st < mintemp.end) {
        totalTime += mintemp.end - st;
        mintemp.end = mintemp.end + req;
      }
      else {
        mintemp.end = st + req
      }
    }
    if (answer > totalTime) answer = totalTime;
  }
  return answer;
}