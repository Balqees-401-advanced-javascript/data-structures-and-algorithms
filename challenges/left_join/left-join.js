'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; 
  }
  set(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }
}


function leftJoin(hashmap1, hashmap2){
  let result = [];
  for (let j = 0; j < hashmap1.storage.length; j++){
    if (hashmap1.storage[j] && hashmap2.storage[j]){
      const obj1 = hashmap1.storage[j].head.value;
      const objKey1 = Object.keys(obj1)[0]
      const objValue1 = Object.values(obj1)[0]
      const obj2 = hashmap2.storage[j].head.value;
      const objValue2 = Object.values(obj2)[0]
      let resultObj = {
        word: objKey1,
        synonym: objValue1,
        antonym: objValue2
      }
      result.push(resultObj);
    }else if(hashmap1.storage[j] && !hashmap2.storage[j]) {
      const obj = hashmap1.storage[j].head.value;
      const objKey = Object.keys(obj)[0]
      const objValue = Object.values(obj)[0]
      let resultObj = {
        word: objKey,
        synonym: objValue,
        antonym: null
      }
      result.push(resultObj);
    }
  }
  return result;
}
