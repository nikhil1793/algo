class Node {
    constructor(data){
       this.data = data;
       this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children.filter(x=>x.data!== data);
    }
}

class Tree {
    constructor(){
       this.root = null;
    }

    traverseBFS(fn){
        let arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            if(node.children.length > 0){
                arr.push(...node.children);
            }
            fn.call(this,node);
        }
    }

    traverseDFS(fn){
        let arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            if(node.children.length > 0){
                arr.unshift(...node.children);
            }
            fn.call(this,node);
        }
    }

    levelWidth(root){
        if(!root) return null;
        let counter = [0];
        const token = '$';
        let arr = [root,token];
        while(arr.length > 1){ // important
            const node = queue.shift();
            counter[counter.length-1] = counter[counter.length-1] + 1;
            if(node === token){
                counter.push(0);
                arr.push(token);
            }
            if(node.children.length > 0){
                arr.push(...node.children);
            }
        }
        return counter;
    }
}