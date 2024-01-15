class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(data) {
    var newNode = new Node(data);
    if (!this.head && !this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unShift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 1 => 2-> 3-> 4-> 5
  middle() {
    var first, second;
    first = this.head;
    second = this.head;
    if (!this.head) return -1;
    while (first.next !== null) {
      first = first.next;
      if (first && first.next) {
        second = second.next;
        first = first.next;
      }
    }
    console.log(second);
  }

  nodeAt(index) {
    var counter = 1;
    var current = this.head;
    while (current.next !== null) {
      if (counter === index) break;
      current = current.next;
      counter = counter + 1;
    }
    console.log(current);
  }

  removeDuplicate() {
    var map = {};
    if (!this.head) return null;
    var current = this.head;
    while (current !== null) {
      if (!map[current.val]) {
        map[current.val] = map[current.val] + 1 || 1;
        current = this.tail.next;
      } else {
        var nextNode = current.next;
        if (nextNode && nextNode.next !== null) {
          current = nextNode.next;
        }
      }
    }
    this.tail = current;
  }

  traverse() {
    console.log("========== TRAVERSE START ===========");
    var current = this.head;
    while (current.next !== null) {
      console.log(current.val);
      current = current.next;
    }
    console.log("========== TRAVERSE ENDS ===========");
  }
}

var list = new MyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(51);
list.push(5);
list.push(6);
list.push(7);

//list.middle();

//console.log("===== node at ======",list.length);
//list.nodeAt(6);

list.traverse();
console.log("===== Remove Duplicate ======");
list.removeDuplicate();
list.traverse();
