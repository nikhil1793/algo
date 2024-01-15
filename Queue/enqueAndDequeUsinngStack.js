class Queue{
    constructor(){
        this.inputStack = [];
        this.outputStack = [];
    }

    enqueue(item){
        this.inputStack.push(item);
    }

    deqeueue(){
        // reverse the input stack and push it to output stack
        // if output stack is empty then make input stack empty 
        // and add the values in output stack in reverse manner
        if(this.outputStack.length <= 0){
            while(this.inputStack.length){
                this.outputStack.push(this.inputStack.pop());
            }
        }
        console.log(this.outputStack.pop());
    }

    peek(){
        while(this.inputStack.length){
            this.outputStack.push(this.inputStack.pop());
        }
        return this.outputStack.pop();
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.deqeueue();
queue.enqueue(5);
queue.deqeueue();
queue.deqeueue();
queue.deqeueue();
queue.deqeueue();