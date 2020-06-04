'use strict';

class Node{
   constructor(){
        this.storage = new Array() //[];
        this.top = null;
   }
}

class Stack{
    constructor(){
    }

    push(value){
        let stacks = new Node;
        stacks.storage.unshift(value) ;
        stacks.top= value;
        console.log(stacks.top);
        console.log(stacks);
        return this;
    }

    pop(stacks){
        // // let stacks = new Node;
        // let value = stacks.storage.shift();
        // stacks.top = stacks.storage[0];
        // console.log(stacks.top);
        // console.log(stacks);
        // return value;
    }

    peek(){
        return this.top;
    }

    isEmpty(){

    }
}

class Queue{
    constructor(){
    }

    enqueue(value){
        let queue = new Node;
        queue.storage.push(value) ;
        console.log(queue);
    }

    dequeue(){

    } 
     peek(){

     }

     isEmpty(){

     }
}

// let queue = new Queue;
// queue.enqueue(1);
// queue.enqueue(2)


// let stacks = new Stack;
// stacks.push(2)
// stacks.push(4)
// stacks.push(7)
// console.log(stacks);
// stacks.pop();


