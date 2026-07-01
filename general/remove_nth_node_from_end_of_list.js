/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  const removeIndex = length - n;

  if (removeIndex === 0) {
    return head.next;
  }

  current = head;

  for (let i = 0; i < removeIndex - 1; i++) {
    current = current.next;
  }

  current.next = current.next.next;
  return head;
};

/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


Example 2:
Input: head = [1], n = 1
Output: []


Example 3:
Input: head = [1,2], n = 1
Output: [1]

 */

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
