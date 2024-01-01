class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        const heap = this.heap;
        heap.push(value);
        let idx = heap.length - 1;
        let parent = Math.floor((idx - 1) / 2);
        
        while(idx > 0 && heap[parent] > heap[idx]){
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            idx = parent;
            parent = Math.floor((idx - 1) / 2)
        }
    }
    pop() {
        const heap = this.heap;
        if(heap.length <= 1){
            return heap.pop();
        }
        
        const output = heap[0];
        heap[0] = heap.pop();
        let idx = 0;
        
        while(idx * 2 + 1 < heap.length){
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let next = idx;
            
            if(heap[next] > heap[left]){
                next = left;
            }
            if(right < heap.length && heap[next] > heap[right]){
                next = right;
            }
            if(next === idx){
                break;
            }
            [heap[idx], heap[next]] = [heap[next], heap[idx]];
            idx = next;
        }
        return output;
    }
    
}

const solution = (n, k, enemy) => {
    let arr = new PriorityQueue();
    let cap = 0;
    
    enemy.slice(0, k).forEach(e => arr.push(e));
    
    for(let i=k; i<enemy.length; i++){
        arr.push(enemy[i]);
        let popN = arr.pop();
        if(cap + popN > n){
            return i;
        }
        cap += popN;
    }
    return enemy.length;
}