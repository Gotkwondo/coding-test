function solution(key, lock) {
  const kL = key.length;
  const lL = lock.length;
  const tCnt = lock.reduce((acc, cur) => acc + cur.reduce((a, c) => a + (c === 0 ? 1 : 0), 0), 0);
  let keys = [key];

  for (let i = 0; i < 3; i++) {
    const rotated = Array.from({ length: kL }, () => Array.from({ length: kL }, () => 0));
    for (let j = 0; j < kL; j++) {
      for (let k = 0; k < kL; k++) {
        rotated[j][k] = keys[i][kL - k - 1][j];
      }
    }
    keys.push(rotated)
  }

  for (let i = 0; i < keys.length; i++) {
    const res = Array.from({ length: 3 * lL - 2 }, () => Array.from({ length: 3 * lL - 2 }, () => 0));
    keys[i].forEach((el, idx) => {
      el.forEach((e, id) => {
        res[idx + lL - 1][id + lL - 1] = e;
      })
    })
    keys[i] = res;
  }

  for (let i = 0; i < keys.length; i++) {
    const ke = keys[i];
    const keyL = ke.length;

    for (let j = 0; j < keyL - lL; j++) {
      for (let k = 0; k < keyL - lL; k++) {
        let flag = false;

        for (let ij = 0; ij < lL; ij++) {
          for (let ik = 0; ik < lL; ik++) {
            if (lock[ij][ik] === 1 && ke[ij + j][ik + k] === 0) continue;
            else if (lock[ij][ik] === 0 && ke[ij + j][ik + k] === 1) continue;
            else {
              flag = true;
              break;
            }
          }
          if (flag) break;
        }
        if (!flag) return true;
      }
    }
  }
  return false;
}