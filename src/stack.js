const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
  }

  push(element) {
    const node = new ListNode(element);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  Stack
};
