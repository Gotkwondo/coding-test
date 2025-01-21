function solution(nodeinfo) {
  class Binary {
    constructor(idx, xPos) {
      this.idx = idx;
      this.xPos = xPos;
      this.left = null;
      this.right = null;
    }
    insert(idx, xPos) {
      if (xPos > this.xPos) {
        this.toRight(idx, xPos);
      } else {
        this.toLeft(idx, xPos);
      }
    }
    toLeft(idx, xPos) {
      this.left
        ? this.left.insert(idx, xPos)
        : (this.left = new Binary(idx, xPos));
    }
    toRight(idx, xPos) {
      this.right
        ? this.right.insert(idx, xPos)
        : (this.right = new Binary(idx, xPos));
    }
  }
  const preArr = [];
  const postArr = [];
  const temp = nodeinfo
    .map(([x, y], idx) => [idx + 1, x, y])
    .sort((a, b) => {
      if (a[2] !== b[2]) return b[2] - a[2];
      else return a[1] - b[1];
    });
  // const temp = nodeinfo.sort((a, b) => b[1] - a[1]);
  const binary = new Binary(temp[0][0], temp[0][1]);
  for (let i = 1; i < temp.length; i++) {
    binary.insert(temp[i][0], temp[i][1]);
  }
  // console.log(binary)

  const preOrder = (binary) => {
    if (binary) {
      preArr.push(binary.idx);
      preOrder(binary.left);
      preOrder(binary.right);
    }
  };
  const postOrder = (binary) => {
    if (binary) {
      postOrder(binary.left);
      postOrder(binary.right);
      postArr.push(binary.idx);
    }
  };
  preOrder(binary);
  postOrder(binary);
  return [preArr, postArr];
}