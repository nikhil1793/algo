class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      console.log("empty");
      return;
    }

    let current = this.head;
    let prev = this.head;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return current;
  }

  middle() {
    if (!this.head) {
      console.log("empty");
      return;
    }

    let oneStep = this.head;
    let twoStep = this.head;
    while (twoStep.next !== null) {
      oneStep = oneStep.next;
      twoStep = oneStep.next;
    }

    console.log(oneStep.val);
  }

  traverse() {
    if (!this.head) {
      console.log("empty");
      return;
    }

    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
    console.log(`SIZE : ${this.length}`);
  }

  // can be used for checking circular linked list as well
  detect_a_Loop(head){ // using slow and fast approach
    const slow = head;
    const fast = head;

    while(fast.next.next){
      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast) return true;
    }
    return false;
  }

  isCircular(head){
    let node = head;

    while(node){
      if(node.next === head){
        return true;
      }
      node = node.next;
    }
    return false;
  }

  reverseLinkedList(head) {
    var node = head;
    var previous = null;
  
    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }

}

console.log("==================== Linked List Starts ==================");

const ll = new LinkedList();

console.log("==================== Push Start ==================");

ll.push("a");

ll.push("b");

ll.push("c");

ll.push("d");

ll.push("a");

ll.traverse();

console.log("==================== Push End ==================");

console.log("==================== Pop Start ==================");

//ll.pop();

//ll.traverse();

console.log("==================== Pop End ==================");

console.log("==================== middle Start ==================");

ll.middle();

console.log("==================== middle End ==================");

console.log("==================== Linked List Ends ==================");
