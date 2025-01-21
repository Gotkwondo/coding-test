const solution = (n, build_frame) => {
  const map = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => -1)
  );
  const answer = [];

  const checkFrame = (ary, x, y) => {
    if (y === 0) return true;
    else if (ary.find(([ax, ay, aa]) => ax === x && ay === y - 1 && aa === 0))
      return true;
    else if (ary.find(([ax, ay, aa]) => ax === x && ay === y && aa === 1))
      return true;
    else if (ary.find(([ax, ay, aa]) => ax === x - 1 && ay === y && aa === 1))
      return true;
    else return false;
  };

  const checkBoard = (ary, x, y) => {
    if (ary.find(([ax, ay, aa]) => ax === x && ay === y - 1 && aa === 0))
      return true;
    else if (
      ary.find(([ax, ay, aa]) => ax === x + 1 && ay === y - 1 && aa === 0)
    )
      return true;
    else if (
      ary.find(([ax, ay, aa]) => ax === x - 1 && ay === y && aa === 1) &&
      ary.find(([ax, ay, aa]) => ax === x + 1 && ay === y && aa === 1)
    )
      return true;
    else return false;
  };

  const destroy = (ary, x, y, type) => {
    const copyAry = [];
    for (let e of ary) {
      copyAry.push(e);
    }
    const idx = copyAry.findIndex(
      ([ox, oy, oa]) => ox === x && oy === y && oa === type
    );
    copyAry.splice(idx, 1);

    for (let [cx, cy, ca] of copyAry) {
      if (ca === 0 && !checkFrame(copyAry, cx, cy)) return;
      else if (ca === 1 && !checkBoard(copyAry, cx, cy)) return;
    }
    ary.splice(idx, 1);
  };

  for (let [x, y, a, b] of build_frame) {
    // 삭제
    if (b === 0) {
      destroy(answer, x, y, a);
    }
    // 생성
    else {
      // 보
      if (a === 0 && checkFrame(answer, x, y)) {
        answer.push([x, y, a]);
      }
      // 기둥
      else if (a === 1 && checkBoard(answer, x, y)) {
        answer.push([x, y, a]);
      }
    }
  }
  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return a[2] - b[2];
      else return a[1] - b[1];
    } else return a[0] - b[0];
  });
};
