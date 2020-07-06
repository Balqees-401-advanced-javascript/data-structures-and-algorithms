'use strict';

class Node{
     constructor(value){
         this.value=value;
         this.next=null;
     }
}

class LinkedList{
     constructor(){
         this.head= null;;
     }

     add(value){
         
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
     }

     getValue(){ // return values of nodes in linkedList in array 
        let values=[]; 
        let current=this.head;
        while(current){
            values.push(current.value);
            current = current.next;
        }
        return values;
     }
}

class Hashmap{
    constructor(size){       
        this.size=size;
        this.map = new Array(size);
    }

    hash(key){ // take key and return index 

        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }

    set(key, value) {

        let hash = this.hash(key);
        if (!this.map[hash]) {
      
            this.map[hash] = new LinkedList();
         
        }
        let entry = {[key]: value};
        this.map[hash].add(entry);
   
    }

    get(key) {
        let hash = this.hash(key);   
        if (this.map[hash]) {
         return this.map[hash].getValue();
        }
        else return 'This key Not exist';
    }

    contains(key){
        let hash = this.hash(key);
        if (this.map[hash]) {
         return true;
        }
        else return false;
    }

}

let myHash = new Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Cat', 'hii');
myHash.set('Owner' ,'Israa');
console.log(myHash.get('Owner'));
console.log(myHash.contains('hi'));


// myHash.map.forEach( (data, i )=> {
//     // console.log(i, data && data.getValue());
// });






