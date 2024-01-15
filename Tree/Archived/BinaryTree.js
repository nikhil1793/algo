class MyNode{
    constructor(val){
        this.left = null;
        this.val=val;
        this.right = null;
    } 
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new MyNode(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value === current.val) return undefined;
                if(value < current.val){
                    if(current.left === null){ // No Left
                        current.left = newNode;
                        return this;
                    }else{ // Left exists
                        current = current.left;
                    }
                } else if(value > current.val){
                    if(current.right === null){ // No Right
                        current.right = newNode;
                        return this;
                    }else{ // right exists
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        if(!this.root) return null;
        if(this.root.val === value) return this.root;
        var current = this.root;
        while(true){
           if(value < current.val){ // left search
              if(value === current.val){
                  return current;
              }
              current = current.left;
           } else if(value > current.val){ // right search
            if(value === current.val){
                return current;
            }
            current = current.right;
         }
         else{
             return current;
         }
        }
    }

    BFS(){
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data;
    }

   
    //         10
    //     5         9
    // 4     7    8     12
    
    // 10 , 5 ,4 ,7 ,9,8,12
    DFS_PreOrder() {
        var data = [];

        function helperFn(node) {
            data.push(node.val);
            if (node.left) {
                helperFn(node.left);
            }
            if (node.right) {
                helperFn(node.right);
            }
        }

        helperFn(this.root);
        return data;
    }

    DFS_PostOrder() {
        var data = [];

        function helperFn(node) {
            if (node.left) {
                helperFn(node.left);
            }
            if (node.right) {
                helperFn(node.right);
            }
            data.push(node.val);
        }

        helperFn(this.root);
        return data;
    }

    DFS_InOrder() {
        var data = [];

        function helperFn(node) {
            if (node.left) {
                helperFn(node.left);
            }
            data.push(node.val);
            if (node.right) {
                helperFn(node.right);
            }            
        }

        helperFn(this.root);
        return data;
    }
    
}


var tree = new BST();
tree.insert(10);
tree.insert(8);
tree.insert(13);
tree.insert(9);
tree.insert(12);
tree.insert(11);

//               10
//        8             13
//           9      12
//               11

console.log(tree);

var f = tree.find(13);
console.log(f);


//   -->            10
//   -->     8             13
//   -->        9      12
//   -->            11
var r = tree.BFS();
console.log('traversed',r); // 10 8 13 9 12 11

var dfs_preorder = tree.DFS_PreOrder(); // 10 8 9 13 11 12
console.log('DFS Preorder',dfs_preorder);

var dfs_postorder = tree.DFS_PostOrder(); // 9 8 11 12 13 10
console.log('DFS Postorder',dfs_postorder);

var dfs_inorder = tree.DFS_InOrder(); // 8 9 10 11 12 13
console.log('DFS Inorder',dfs_inorder);
