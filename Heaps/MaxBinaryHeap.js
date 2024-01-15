class MaxBinaryHeap{
    constructor(){
        this.value = [41,39,33,18,27,12];
    }

    insert(elem){
      this.value.push(elem);
      this.bubbleUp();
    }

    bubbleUp(){
        var index = this.value.length-1;
        var element = this.value[index];

        while(index > 0){
            var parentIndex = Math.floor((index - 1)/2);
            var parent = this.value[parentIndex];
            if(element <= this.value[parentIndex]) break;
            this.value[parentIndex] = element;
            this.value[index] = parent;
            index = parentIndex;
        }

    }
}

var maxBHeap = new MaxBinaryHeap();
maxBHeap.insert(55);
console.log(maxBHeap.value);

