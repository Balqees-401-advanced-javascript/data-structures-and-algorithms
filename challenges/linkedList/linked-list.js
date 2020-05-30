'use strict';

class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
    
}

class LinkedList{
    constructor(){
    this.head =null;
    }
    insert(value){
      let node = new Node(value); 
      if(!this.head){
          this.head=node;
        // console.log(this.head);
          return this; // the whole linked list
      } 

      let currentNode= this.head;
      while(currentNode.next){
           currentNode = currentNode.next;
      }
      currentNode.next=node;
    //   console.log(node);
    }
  
    includes(value){
        let currentNode= this.head;
        while(currentNode.next){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }

        if(currentNode.value === value){
            return true;
        }
        else{
            return false;
        }
    }

    toString(){
        let currentNode= this.head;
        let nodeString = '';
        while(currentNode.next){
            nodeString = nodeString  + ` { ${currentNode.value} } -> `
            currentNode = currentNode.next;
        }
        nodeString = nodeString + `{ ${currentNode.value} } ->`
        return nodeString;
    }

          
}


// let node = new LinkedList();
// console.log(node.insert(1));
// node.insert(3);
// node.insert(5);
// console.log(node.includes(5));
// console.log(node.toString())
// module.exports = LinkedList;

