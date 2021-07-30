function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(values, head) {
  values.reduce((head, value) => (head.next = new ListNode(value)), head);
  return head.next;
}

const l1 = createList([9, 9, 9], new ListNode());

const l2 = createList([9, 9, 9], new ListNode());

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  class Thunk {
    constructor(fn) {
      this.fn = fn;
    }
  }
  function traverse(list, cont) {
    return thunk(
      list.next !== null
        ? () => traverse(list.next, x => cont(x + list.val))
        : () => cont(list.val.toString())
    );
  }

  function createThunk(fn) {
    return () => fn();
  }

  function trampoline2(thunk) {
    while (thunk.name === "thunk") {
      thunk = thunk();
    }
    return thunk;
  }

  function trampoline(thunk) {
    while (typeof thunk === "object" && thunk.constructor.name === "Thunk") {
      thunk = thunk.fn();
    }
    return thunk;
  }

  const first = trampoline2(traverse(l1, x => x));
  const second = trampoline2(traverse(l2, x => x));

  const dummyHead = new ListNode();
  (BigInt(first) + BigInt(second))
    .toString()
    .split("")
    .reduceRight((result, value) => (result.next = new ListNode(value)), dummyHead);
  return dummyHead.next;
};

console.log(addTwoNumbers(l1, l2));
