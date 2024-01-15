class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

/**
 * Implementing Binary Search Tree
 * 2 childs. 
 * Left Node < Root Node > Right Node
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(item) {
        const newNode = new Node(item);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            //check duplicate
            if (item === current.data) return null;
            //left check
            if (item < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                else current = current.left;
            } else { // right check
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                else current = current.right;
            }
        }
    }

    find(value){
        if(!this.root) return null;
        if(this.root.data === value) return this.root;
        var current = this.root;
        while(true){
           if(value < current.data){ // left search
              if(value === current.data){
                  return current;
              }
              current = current.left;
           } else if(value > current.data){ // right search
            if(value === current.data){
                return current;
            }
            current = current.right;
         }
         else{
             return current;
         }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(8);
tree.insert(2);
tree.insert(11);
tree.insert(7);
tree.insert(9);
console.log(tree);
/**
 *      8 
 *   2       11 
 *     7   9
 */