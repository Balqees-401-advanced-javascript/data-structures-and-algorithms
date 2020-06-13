'use strict';

class Stack{
    constructor(){
        this.storage = new Array(); //[]
        this.top = null;
    }

    push(value){
        this.storage.unshift(value) ;
        this.top= null;
    }

    pop(){
        if (this.storage.length == 0) {
            return 'empty Stack';
        }
        else {
            let value = this.storage.shift();
            this.top = this.storage[0];
            return value;
        }

    }

    peek(){
        if (this.storage.length == 0) {
            return 'empty Stack';
        }
        else{
            return this.top;

        }
       
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

     isEmpty(){
        if (this.storage[0] === undefined){
            return true;
        }
        else { return false;}
     }
}

