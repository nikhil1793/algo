// import display from './Node';

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Pair {
  constructor(node, state) {
    this.node = node;
    this.state = state;
  }
}

class BinaryTree {
  input = [50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null];

  // stack of Pair class
  stack = [];

  // root node
  root = new Node(this.input[0], null, null);

  // create first Pair
  pair = new Pair(this.root, 1);

  construct() {
    //push first pair to the stack of Pairs
    this.stack.push(this.pair);

    let idx = 0;

    while (this.stack.length) {
      let top = this.stack[this.stack.length - 1];

      if (top.state === 1) {
        // left
        idx++;
        if (this.input[idx] !== null) {
          top.node.left = new Node(this.input[idx], null, null);
          let leftPair = new Pair(top.node.left, 1);
          this.stack.push(leftPair);
        } else {
          top.node.left = null;
        }
        top.state++;
      } else if (top.state === 2) {
        // right
        idx++;
        if (this.input[idx] !== null) {
          top.node.right = new Node(this.input[idx], null, null);
          let rightPair = new Pair(top.node.right, 1);
          this.stack.push(rightPair);
        } else {
          top.node.right = null;
        }
        top.state++;
      } else {
        // remove from the stack
        this.stack.pop();
      }
    }
  }

  display(node) {
    if (node === null) return;
    //node self work
    let str = "";
    str += node.left !== null ? node.left.data : ".";
    str += `<- ${node.data} ->`;
    str += node.right !== null ? node.right.data : ".";

    console.log(str);

    this.display(node.left);
    this.display(node.right);
  }

  sum(node) {
    if (node === null) {
      return 0;
    }

    let ls = this.sum(node.left);
    let rs = this.sum(node.right);

    return ls + node.data + rs;
  }

  size(node) {
    if (node === null) {
      return 0;
    }

    let ls = this.size(node.left);
    let rs = this.size(node.right);

    return ls + rs + 1;
  }

  height(node) {
    if (node === null) {
      return -1;
    }

    let lh = this.height(node.left);
    let rh = this.height(node.right);

    return Math.max(lh, rh) + 1;
  }

  max(node) {
    if (node === null) {
      return -1;
    }

    let lmx = this.max(node.left);
    let rmx = this.max(node.right);

    return Math.max(lmx, rmx, node.data);
  }

  traversal(node) {
    if (node === null) return;

    console.log("Pre: ", node.data);
    this.traversal(node.left);
    console.log("In: ", node.data);
    this.traversal(node.right);
    console.log("Post: ", node.data);
  }

  /**
   * ? Level Order Traversal
   * * Remove | Print | Add ( at each level)
   */
  levelOrderTraversal(node) {
    const queue = [];
    queue.push(node);

    let levelCount = 1;

    while (queue.length > 0) {
      console.log(`------${levelCount}-----`);
      const count = queue.length;

      for (let i = 0; i < count; i++) {
        node = queue.splice(0, 1)[0]; // remove
        console.log(node.data); // print

        if (node.left !== null) {
          queue.push(node.left); // add
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }

      levelCount++;
    }
  }

  /**
   * * Iterative Traversal
   * ? State: 1  => Pre Order
   * ? State: 2  => In Order
   * ? State: 3  => Post Order
   * todo: Traversal of Binary Tree usinh Iterative approach
   */

  iterativeTraversal(node) {
    let stack = [];
    let pair = new Pair(node, 1); // ? create root as first default pair with state 1
    stack.push(pair); // ? add root first time as the starting point

    let preStr = "";
    let inStr = "";
    let postStr = "";

    while (stack.length) {
      // * run until stack is empty

      const top = stack[stack.length - 1]; // ? top of the stack

      if (top.state === 1) {
        // todo: Pre Order
        preStr += ` ${top.node.data} `;
        if (top.node.left !== null) {
          let lPair = new Pair(top.node.left, 1);
          stack.push(lPair);
        }
        top.state++;
      } else if (top.state === 2) {
        // todo: In Order
        inStr += ` ${top.node.data} `;
        if (top.node.right !== null) {
          let rPair = new Pair(top.node.right, 1);
          stack.push(rPair);
        }
        top.state++;
      } else {
        // todo: Post Order
        postStr += ` ${top.node.data} `;
        stack.pop();
      }
    }

    console.log('Pre: ', preStr);
    console.log('In: ', inStr);
    console.log('Post: ', postStr);
  }
}

const bt = new BinaryTree();
bt.construct();

console.log(" ========================================== ");
const rSum = bt.sum(bt.root);
console.log("Sum: ", rSum);
console.log(" ========================================== ");

console.log(" ========================================== ");
const rSize = bt.size(bt.root);
console.log("Size: ", rSize);
console.log(" ========================================== ");

console.log(" ========================================== ");
const rHeight = bt.height(bt.root);
console.log("Height: ", rHeight);
console.log(" ========================================== ");

console.log(" ========================================== ");
const rMax = bt.max(bt.root);
console.log("Max: ", rMax);
console.log(" ========================================== ");

console.log(" ========================================== ");
console.log(" Traversal ");
bt.traversal(bt.root);
console.log(" ========================================== ");

console.log(" ========================================== ");
console.log(" Level Order Traversal ");
bt.levelOrderTraversal(bt.root);
console.log(" ========================================== ");

console.log(" ========================================== ");
console.log(" Iterative Traversal ");
bt.iterativeTraversal(bt.root);
console.log(" ========================================== ");
