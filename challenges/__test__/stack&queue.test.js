'use strict';

const {Stack,Queue} = require('../stacksAndQueues/stacks-and-queues');

describe('stack', ()=> {

    it('Check push', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });

    it('check pop' , ()=>{
        let stack= new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.peek()).toEqual(2);
    });

    it('Check push', ()=> {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek()).toEqual(1);
    });

    it('check pop' , ()=>{
        let queue= new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        expect(queue.peek()).toEqual(2);
    });
});