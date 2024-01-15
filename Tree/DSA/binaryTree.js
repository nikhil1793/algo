class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  height(node) {
    if (!node) {
      return -1;
    }
    return node.height;
  }

  insert(value) {
    let insertFn = (value, node) => {
      if (node === null) {
        const newNode = new Node(value);
        return newNode;
      }
      if (value < node.value) {
        node.left = insertFn(value, node.left);
      }
      if (value > node.value) {
        node.right = insertFn(value, node.right);
      }
      node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
      return node;
    };
    this.root = insertFn(value, this.root);
  }

  balancedTree() {
    let balancedTreeFn = (node) => {
      if (node === null) {
        return true;
      }
      return (
        Math.abs(this.height(node.left) - this.height(node.rght)) <= 1 &&
        balancedTreeFn(node.left) &&
        balancedTreeFn(node.right)
      );
    };
    return balancedTreeFn(this.root);
  }

  populate(nums) {
    for (let i of nums) {
      this.insert(i);
    }
  }

  display() {
    let displayFn = (node, node_details) => {
      if (!node) {
        return;
      }
      console.log(`${node_details} --->  ${node.value} `);
      displayFn(node.left, `Left child of ${node.value}`);
      displayFn(node.right, `Right child of ${node.value}`);
    };
    displayFn(this.root, "Root Node");
  }

  /**
   * * used for evaluating math expressions
   * * used for making copy
   * * used in serialization
   */
  preOrderTraversal() {
    let preOrderTraversalFn = (node) => {
      if (!node) {
        return;
      }
      console.log(node.value);
      preOrderTraversalFn(node.left);
      preOrderTraversalFn(node.right);
    };
    preOrderTraversalFn(this.root);
  }

  /**
   * * print node in sorted manner for BST
   */
  inOrderTraversal() {
    let inOrderTraversalFn = (node) => {
      if (!node) {
        return;
      }
      inOrderTraversalFn(node.left);
      console.log(node.value);
      inOrderTraversalFn(node.right);
    };
    inOrderTraversalFn(this.root);
  }

  /**
   * * used in case of deletion a binary tree
   * * used in case of bottom to up calculation eg. diameter of tree
   */
  postOrderTraversal() {
    let postOrderTraversalFn = (node) => {
      if (!node) {
        return;
      }
      postOrderTraversalFn(node.left);
      postOrderTraversalFn(node.right);
      console.log(node.value);
    };
    postOrderTraversalFn(this.root);
  }

  /**
   * * Used when answer lies near the root node
   * * when need to search/operation levelwise - eg. sum of all the node at every level
   */
  breadthFirstSearch() {
    const queue = [this.root];
    while (queue.length) {
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();

        console.log(node.value);

        if (node?.left) {
          queue.push(node.left);
        }

        if (node?.right) {
          queue.push(node.right);
        }
      }
      console.log('----------------------');
    }
  }

  /**
   * * traverse / search / operate from top to bottom
   */
  depthFirstSearch(){

  }
}

const bt = new BST();

/**
 * *               40
 * 
 * *        20             60
 * 
 * *    10       25    55        75
 * * 
 * * 
 */

bt.populate([40, 20, 25, 60, 75, 10, 55]);

//bt.display();

bt.breadthFirstSearch();
