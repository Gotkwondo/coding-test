const getComb = (arr, n, depth, sum) => {
  const result = [];

  if (depth === 10) return [[...arr, n - sum]];

  for (let i = 0; i <= n - sum; i++) {
    if (i + sum > n) break;
    const temp = getComb([...arr, i], n, depth + 1, sum + i);
    result.push(...temp);
  }
  return result;
};

const checkScore = (pArr, lArr) => {
  let pS = 0;
  let lS = 0;

  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] === 0 && lArr[i] === 0) continue;
    if (pArr[i] >= lArr[i]) pS += (10 - i);
    else lS += (10 - i);
  }
  return lS - pS;
};

const getLastNonZero = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) return i;
  }
  return null;
};

const solution = (n, info) => {
  let answer = [];
  let sub = 0;
  const test = getComb([], n, 0, 0);

  for (let i = 0; i < test.length; i++) {
    const scoreSub = checkScore(info, test[i]);
    if (scoreSub <= 0) continue;
    if (scoreSub > sub) {
      answer = test[i];
      sub = scoreSub;
    }
    else if (scoreSub === sub) {
      const pN = getLastNonZero(answer);
      const nN = getLastNonZero(test[i]);
      if (pN < nN) answer = test[i];
      else if (pN === nN && answer[pN] < test[i][nN]) answer = test[i];
    }
  }
  return answer.length > 0 ? answer : [-1];
};