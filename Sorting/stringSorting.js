class HeapSort {
  constructor() {
    this.array = [];
  }

  sort(arr) {
    this.array = arr;
    const n = arr.length;

    // Build a max heap
    this.buildMaxHeap();

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element
      [this.array[0], this.array[i]] = [this.array[i], this.array[0]];

      // Call heapify on the reduced heap
      this.heapify(i, 0);
    }

    return this.array;
  }

  buildMaxHeap() {
    const n = this.array.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(n, i);
    }
  }

  heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && this.array[left] > this.array[largest]) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && this.array[right] > this.array[largest]) {
      largest = right;
    }

    // If largest is not the root
    if (largest !== i) {
      // Swap the root with the largest element
      [this.array[i], this.array[largest]] = [
        this.array[largest],
        this.array[i],
      ];

      // Recursively heapify the affected sub-tree
      this.heapify(n, largest);
    }
  }
}

// Example usage to sort characters:
const heapSort = new HeapSort();
const charactersToSort = ["d", "b", "a", "c", "e"];
const sortedCharacters = heapSort.sort(charactersToSort);
console.log("Sorted characters:", sortedCharacters);
