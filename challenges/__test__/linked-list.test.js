'use strict';
const LinkedList = require('../linkedList/linked-list');

describe('Linked List', ()=>{
    it('constructer', () => {
          let list = new LinkedList();
          expect(list.head).toBeNull();
    });

    it('insert', ()=>{
        let list = new LinkedList();
        list.insert('my test for linked list');
        expect(list.head.value).toEqual('my test for linked list');
    });
});