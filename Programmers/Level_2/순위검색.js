const makeMap = (infos) => {
  const map = new Map();

  for (let info of infos) {
    const [lan, job, exp, food, score] = info.split(' ');
    const key = `${lan}-${job}-${exp}-${food}`;
    if (map.has(key)) {
      map.set(key, [...map.get(key), +score]);
    }
    else {
      map.set(key, [+score]);
    }
  }

  for (const [key, val] of map) {
    map.set(key, map.get(key).sort((a, b) => a - b));
  }
  return map;
};

const makeQuery = (query) => {
  const result = [];
  const split = query.split(' and ');
  const lan = split[0] === '-' ? ['cpp', 'java', 'python'] : [split[0]];
  const job = split[1] === '-' ? ['frontend', 'backend'] : [split[1]];
  const exp = split[2] === '-' ? ['junior', 'senior'] : [split[2]];
  let [food, score] = split[3].split(' ');
  food = food === '-' ? ['pizza', 'chicken'] : [food];

  for (let l of lan) {
    for (let j of job) {
      for (let e of exp) {
        for (let f of food) {
          result.push([`${l}-${j}-${e}-${f}`, +score]);
        }
      }
    }
  }
  return result;
};

const binarySearch = (numArr, targetNum) => {
  let [lp, rp] = [0, numArr.length - 1];

  while (lp <= rp) {
    let mid = ~~((lp + rp) / 2);

    if (numArr[mid] === targetNum) {
      while (mid > 0 && numArr[mid - 1] === targetNum) mid--
      return mid;
    }

    if (numArr[mid] <= targetNum) {
      lp = mid + 1;
    }
    else rp = mid - 1;
  }
  return lp;
};

const solution = (info, query) => {
  const map = makeMap(info);
  const answer = query.map((e) => {
    const lists = makeQuery(e);
    let sum = 0;

    for (const [newQuery, newScore] of lists) {
      const list = map.get(newQuery);
      sum += list ? list.length - binarySearch(list, newScore) : 0
    }

    return sum;
  });

  return answer;
};