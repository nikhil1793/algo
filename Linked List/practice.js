class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    let node = new Node(item, null);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insert(item) {
    const node = new Node(item, null);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  size() {
    let count = 0;
    if (this.head) {
      let current = this.head;
      while (current) {
        count = count + 1;
        current = current.next;
      }
    }
    return count;
  }

  removeFirst() {
    if (!this.head) return null;
    let firstNode = this.head;
    this.head = this.head.next;
    return firstNode;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) return this.head;
    let currNode = this.head;
    let prevNode = null;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
    return currNode;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let counter = 0;
    let currNode = this.head;
    let prevNode = null;
    while (currNode) {
      if (counter === index) {
        break;
      }
      prevNode = currNode;
      counter = counter + 1;
      currNode = currNode.next;
    }
    if (!currNode) {
      prevNode.next = null;
    } else {
      prevNode.next = currNode.next;
    }
  }

  insertAt(index, val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (index === 0) {
      node.next = this.head.next;
      this.head = node;
      return;
    }
    let counter = 0;
    let currNode = this.head;
    let prevNode = null;
    while (currNode) {
      if (counter === index) {
        break;
      }
      prevNode = currNode;
      counter = counter + 1;
      currNode = currNode.next;
    }
    if (!currNode) {
      console.log("incorrect index");
    } else {
      prevNode.next = node;
      node.next = currNode;
    }
  }

  traverse() {
    console.log("========== TRAVERSE START ===========");
    var current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log("========== TRAVERSE ENDS ===========");
  }

  forEach(fn) {
    if (!this.head) console.log("empty list");
    var current = this.head;
    var index = 0;
    while (current) {
      fn.call(this, current.data, index);
      index = index + 1;
      current = current.next;
    }
  }

  circularList() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next; // increment by 1 step
      fast = fast.next.next; // increment fast by 2 steps
      // if both of them are pointing to the same node then there is circular list
      if (slow === fast) return true;
    }

    return false;
  }

  fromLast(index) {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;

    // step 1 : increment the fast pointer  to the given index from left
    for (let i = 0; i < index; i++) {
      if (fast.next) {
        fast = fast.next;
      }
    }

    // step 2 : iterate both slow and fast by incrementing 1 and check if the fast is pointing
    // to the last element in the list

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  insertAt_pracice(data, index){
    const node = new Node(data, null);
    if(this.head === null && index === 0){
        this.head = node;
        return true;
    }

    let currentIndex = 0;
    let prev = null;
    let curr = this.head;

    while(curr.next !== null){
        if(currentIndex === index){
            if(prev === null){
                node.next = this.head;
                this.head = node;
                return true;
            }
            prev.next = node;
            node.next = curr;
            return true;
        }
        prev = curr;
        curr = curr.next;
        currentIndex++;
    }
  }
}

var list = new LinkedList();
list.insertFirst(1);
list.insertFirst(0);
list.insert(2);
list.insert(3);
list.insert(4);
list.insertFirst(-1);
console.log(list);
console.log(list.insertAt_pracice(55, 7));
//console.log(list.fromLast(3));
// -1 0 1 2 3 4
//console.log(list.removeAt(0));
//console.log(list.size());
//console.log(list.removeFirst());
//list.traverse();
//list.insertAt(2,'a');
//console.log({...list});
//list.traverse();
// list.forEach((data, index) => {
//     console.log(data, index);
// })
// console.log(list.removeLast());
//console.log(list);
//console.log(list.removeFirst());
