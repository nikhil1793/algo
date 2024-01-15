class Queue {
    constructor() {
        this.queue = [];
        this.length = 0;
    }

    add(item) {
        this.queue.unshift(item);
        this.length = this.length + 1;
    }

    remove() {
        if (this.length === 0) return undefined;
        this.length = this.length - 1;
        return this.queue.pop();
    }
}

weave = (queue1, queue2) => {
    let queue = new Queue();
    while (queue1.length > 0 || queue2.length > 0) {
        if (queue1.length > 0) {
            queue.add(queue1.remove());
        }
        if (queue2.length > 0) {
            queue.add(queue2.remove());
        }
    }
    console.log(queue);
}

var queue1 = new Queue();
queue1.add(1);
queue1.add(2);
queue1.add(3);
queue1.add(4);

var queue2 = new Queue();
queue2.add("a");
queue2.add("b");
queue2.add("c");
queue2.add("d");

weave(queue1, queue2);

