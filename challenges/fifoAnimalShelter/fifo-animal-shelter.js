class Queue{
    constructor(){
        this.storage = new Array();
        this.front = null;
    }

    enqueue(value){
        if (this.storage.length == 0) {
            this.front = value;
        }
        this.storage.push(value);
        return this.storage;
    }

    dequeue(){
        if (this.storage.length == 0) {
            return 'empty Queue';
        }
        else {
            this.storage.shift();
            this.front = this.storage[0];
            return this.storage;
        }
      
    } 
     peek(){
        if (this.storage.length == 0) {
            return 'empty Queue';
        }

        return this.front;
     }