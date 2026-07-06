/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (lists.some(list => list !== null)) {
        let lowestValue = Infinity;
        let lowestIndex = -1;

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            if (list === null) continue;
            if (list.val < lowestValue) {
                lowestValue = list.val;
                lowestIndex = i;
            }
        }

        current.next = lists[lowestIndex];
        lists[lowestIndex] = lists[lowestIndex].next;
        current = current.next;
    }

    return dummy.next
};