// ================> file to delete the value in the maxHeap <================= //

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let current = this.heap.length-1;
    while(current>0){
        const parent = Math.floor((current-1)/2)
        if(this.heap[current]>this.heap[parent]){
            this.swap(current, parent)
            current = parent
        } else{
            break;
        }
    }
  }
  extractMax(){
    if(this.heap.length === 0){
        return null;
    }
    const largest = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return largest;
  }
  heapifyDown(){
    let current =0;
    while(true){
        const leftChild = 2*current+1
        const rightChild = 2*current+2;
        let largest = current;
        if(leftChild<this.heap.length&& this.heap[leftChild]>this.heap[largest]){
            largest = leftChild;
        }
        if(rightChild<this.heap.length&&this.heap[rightChild]>this.heap[largest]){
            largest = rightChild;
        }
        if(largest!==current){
            this.swap(current, largest)
            current = largest
        } else {
            break;
        }
    }
  }
  swap(current, parent){
    const temp = this.heap[current]
    this.heap[current]= this.heap[parent]
    this.heap[parent]= temp;
  }
}

const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(5)
maxHeap.insert(1)
maxHeap.insert(3)
maxHeap.insert(67)
maxHeap.insert(60)
console.log(maxHeap.heap);
console.log(maxHeap.extractMax())
console.log(maxHeap.heap);
