'use strict';
const LinkedList = require('../linkedList/linked-list');
let list = new LinkedList();

describe('Linked List', ()=>{
    it('constructer', () => {
         
          expect(list.head).toBeNull();
    });

    it('insert', ()=>{
        list.insert('a');
        expect(list.head.value).toEqual('a');
    });

    it('insert', ()=>{
        list.insert('b');
        expect(list.head.next.value).toEqual('b');
    });

    it('include', () => {
        
        list.includes('a');
        expect(list.includes('a')).toBeTruthy(); 
    });

    it('toString' , () =>{

        list.toString();
        expect(list.toString()).toEqual(" { a } -> { b } -> null");
    })
});