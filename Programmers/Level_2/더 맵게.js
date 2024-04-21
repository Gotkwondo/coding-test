class minHeap {
    constructor() {
        this.heap = [];
    }
    length(){
        return this.heap.length;
    }
    swap(n1, n2) {
        [this.heap[n1], this.heap[n2]] = [this.heap[n2], this.heap[n1]]
    }
    isEmpty(){
        return this.length() === 0;
    }
    pop(){
        if(this.isEmpty()) return null;
        const root = this.heap[0];
        const lastNode = this.heap.pop();
        if(!this.isEmpty()){
            this.heap[0] = lastNode;
            this.bubbledown();
        }
        return root;
    }
    push(num) {
        this.heap.push(num);
        this.bubbleup();
    }
    bubbleup() {
        let idx = this.length() - 1;
        while(idx > 0){
            const parent = Math.floor((idx - 1) / 2);
            if(this.heap[parent] <= this.heap[idx]) break;
            this.swap(idx, parent);
            idx = parent;
        }
    }
    bubbledown() {
        let idx = 0;
        while(true){
            let smallest = idx;
            const leftIdx = 2 * smallest + 1;
            const rightIdx = 2 * smallest + 2;
            if(this.heap[smallest] && this.heap[leftIdx] < this.heap[smallest]) smallest = leftIdx;
            if(this.heap[smallest] && this.heap[rightIdx] < this.heap[smallest]) smallest = rightIdx;
            if(smallest === idx) break;
            this.swap(idx, smallest);
            idx = smallest;
        }
    }
};

const solution = (scoville, K) => {
  let heap = new minHeap();
  let answer = 0;
    
  scoville.forEach(e => {
    heap.push(e);
  });

  while (heap.heap[0] < K && heap.length() > 1) {
    heap.push(heap.pop() + heap.pop() * 2);
    answer++;
  }
    
  return heap.heap[0] < K ? -1 : answer;
};