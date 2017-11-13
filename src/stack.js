/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    this.length++;
  }

  pop() {
    if (!this.length) return 0;
    this.length--;
    return this.data.pop();
  }

  get size() {
    return this.length;
  }
}

module.exports = Stack;
