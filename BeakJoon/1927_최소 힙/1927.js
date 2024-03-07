const [N, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if ( this.heap[leftChildIndex] && this.heap[leftChildIndex] < this.heap[smallest] ) {
        smallest = leftChildIndex;
      }

      if ( this.heap[rightChildIndex] && this.heap[rightChildIndex] < this.heap[smallest] ) {
        smallest = rightChildIndex;
      }
      // 좌우 자식 모두 없는 경우
      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }
}

const heap = new MinHeap;
let answer = [];

for (let i = 0; i < N; i++) {
  const x = ARR[i];
  if (x !== 0) {
    heap.push(x);
  }
  else {
    const min = heap.pop() || 0;
    answer.push(min);
  }
}
console.log(answer.join('\n'));