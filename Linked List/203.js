// =========================>Remove Linked List Elements<==================

var removeElements = function (head, val) {
  let current = head;
  let prev = null;
  while (current !== null) {
    if (current.val === val) {
      if (!prev) {
        head = head.next;
        current = current.next;
      } else {
        prev.next = current.next;
        current = current.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
