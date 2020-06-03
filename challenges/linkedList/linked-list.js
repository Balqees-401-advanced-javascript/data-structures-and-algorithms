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
    this.count =0;
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
           this.count = this.count+1;
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
        nodeString = nodeString + `{ ${currentNode.value} } -> null`
        return nodeString;
    }

    insertBefore(value, newVal){
        let node = new Node(value); 
        let currentNode= this.head;
        while(currentNode.next){
            if( currentNode.next.value === value){

                node = new Node(newVal);
                node.next=currentNode.next; 
                currentNode.next=node;
                return this;
            
            }
        
        }
    }   
    
    insertAfter(value, newVal){
        let node = new Node(value); 
        let currentNode= this.head;
        while(currentNode){
            if( currentNode.value === value){
                node = new Node(newVal);
                node.next=currentNode.next;
                currentNode.next=node; 
                return this;  
            } 
            currentNode=currentNode.next;
        }
    }

    FromEnd(value){
        // let node = new Node(value); 
        let currentNode= this.head;
        //  console.log(currentNode.value);
        //  console.log(this.count);
        let length = 0;
        let index = this.count - value;
        // console.log(index)
        // console.log(this.count)
        // console.log(index);
        while(currentNode){
            // console.log(length === index , length , index)
            // console.log(value);
            // console.log(length)
            if(length === index ){
                // console.log(currentNode.value);
                return currentNode.value;
            }
            else if(this.count > value || value < 0){
                return 'Exception';
                // console.log('Exception');
            }
            currentNode = currentNode.next;   
            length = length+1;
        }
    }

    // mergeLists(){
    //     let node = new LinkedList();
    //     let node2 = new LinkedList();
    //      let currentNode1 = this.head;
    //     //  console.log(currentNode1);
    //     while(currentNode1){
    //         console.log(currentNode1);
    //     }
    //      let currentNode2 = this.head;
    //      console.log(currentNode2);
    // }

    // Palindrome(linkedList) {
    //     let arrayCurrentLinkedList = linkedList;
    //     let newArray = [];

    //     while(arrayCurrentLinkedList !== null){
             
    //     }


    //             }
  
    }


module.exports = LinkedList;


let node = new LinkedList();
let node2 = new LinkedList();
node2.insert(14);
node2.insert(14);
node2.insert(14);
node.insert(1);
node.insert(3);
node.insert(2);
console.log(node.toString())
console.log(node2.toString())
node.mergeLists()
// console.log(node.includes(5));
// console.log(node.toString())
// console.log(node.insertBefore(3,14))
// console.log(node.toString())
// console.log(node.insertAfter(3,7))
// console.log(node.toString())
// node.insert(2);
// node.insert(3);
// node.insert(1);
// console.log(node.toString())
// console.log(node.count)
// console.log(node.FromEnd(-1));