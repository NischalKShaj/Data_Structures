var hasCycle = function (head) {
  let current = head;
  while (current && current.next) {
    head = head.next;
    current = current.next.next;
    if (current === head) {
      return true;
    }
  }
  return false;
};
const head = [3, 2, 0, -4];
const result = hasCycle(head);
console.log(result);
