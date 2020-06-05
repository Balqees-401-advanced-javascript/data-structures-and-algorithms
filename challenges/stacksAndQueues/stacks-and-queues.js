'use strict';

class Stack{
    constructor(){
        this.storage = new Array(); //[]
        this.top = null;
    }

    push(value){
        this.storage.unshift(value) ;
        console.log( this.storage);
        this.top= value;
    }

    pop(){
        let value = this.storage.shift();
        this.top = this.storage[0];
        return value;
    }

    peek(){
        console.log(this.top);
        return this.top;
    }

    isEmpty(){
        console.log(this.top)
       if (this.top === undefined){
           return true ;
       }
       else {
           return false;
       }
    }
}

class Queue{
    constructor(){
        this.storage = new Array();

    }

    enqueue(value){
        this.storage.push(value) ; 
    }

    dequeue(){
         this.storage.shift();
    } 
     peek(){
        return this.storage[0];
     }

     isEmpty(){
        if (this.storage[0] === undefined){
            return true;
        }
        else { return false;}
     }
}

module.exports ={
    Stack,
    Queue
} 


// let queue = new Queue;
// queue.enqueue(1);
// queue.enqueue(2)
// queue.dequeue()
// queue.enqueue(7)
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.peek())
// console.log(queue.isEmpty())
// let stacks = new Stack;
// stacks.push(2)
// stacks.push(4)
// stacks.push(7)
// console.log(stacks);
// stacks.pop();
// stacks.peek()
// stacks.pop();
// stacks.pop();
// stacks.pop();
// stacks.pop();
// console.log(stacks.isEmpty())