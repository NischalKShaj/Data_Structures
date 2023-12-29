// ===================> file to show how to build a Maxheap <============= //

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[current] > this.heap[parent]) {
        this.swap(parent, current);
        current = parent;
      } else {
        break;
      }
    }
  }
  swap(parent, current) {
    const temp = this.heap[current];
    this.heap[current] = this.heap[parent];
    this.heap[parent] = temp;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(67);
maxHeap.insert(3);
maxHeap.insert(8);
console.log(maxHeap.heap);