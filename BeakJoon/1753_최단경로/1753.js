const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');
class MinHeap{
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length - 1;
  }
  add(value) {
    let cur = this.size();
    let parent = Math.floor(cur / 2);
    this.heap.push(value);

    while (cur > 1 && this.heap[cur].v < this.heap[parent].v) {
      this.swap(cur, parent);
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }
  heapPop() {
    const min = this.heap[1];
    
    if (this.size() <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    if (!this.heap[left]) return min;
    else if (!this.heap[right]) {
      if (this.heap[cur].v > this.heap[left].v) {
        this.swap(cur, left);
      }
      return min;
    }

    while (left < this.size() && (this.heap[left].v < this.heap[cur].v || this.heap[right].v < this.heap[cur].v)) {
      const idx = this.heap[left].v < this.heap[right].v ? right : left;
      this.swap(cur, idx);
      cur = idx;
      left = cur * 2;
      right = left + 1;
    }
    return min;
  }
}
const [n, m] = input.shift().split(' ').map(Number);
const start = +input.shift()
const list = input.map(e => e.split(' ').map(Number));
const link = Array.from({ length: n + 1 }, () => []);
const cost = Array.from({ length: n + 1 }, () => Infinity);
const que = new MinHeap();
que.add({ target: start, v: 0 });
cost[start] = 0;

list.forEach(([ u, v, w ]) => {
  link[u].push({target: v, v: w});
});

while (que.size() !== 0) {
  const cur = que.heapPop();
  const [cNode, value] = [cur.target, cur.v];
  
  if (cost[cNode] < value) continue;
  
  for (let i = 0; i < link[cNode].length; i++){
    const nValue = value + link[cNode][i].v;
    
    if (nValue < cost[link[cNode][i].target]) {
      cost[link[cNode][i].target] = nValue;
      que.add({ target: link[cNode][i].target, v: nValue });
    }
  }
}

console.log(cost.slice(1).map(e => e === Infinity ? 'INF' : e).join('\n'));