class Node{
constructor(value){
this.value=value;
this.next=null;
} 
}

class LinkedList{

constructor(){
this.head=null;
}
 
insert(value){
 let node = new Node(value);
if (this.head === null){
 return  this.head= node ;
}
 
node.next = this.head;
this.head=node;
return this;
}


remove(value){
let current =this.head;
 if (this.head.value === value){
      this.head = current.next;
       return this

}

while(current.next){

if (current.next.value===value)
{

           current.next = current.next.next;
           return this;

}
current = current.next;
}

return 'not found';

}
toString(){
    let str = '';
    let current = this.head;
    while(current.next){
        str = str+current.value;
        current=current.next;
    }
    str = str+current.value;
    return str;
}

palindroma(str){
    let str2 = ''; 
    for(let i=str.length-1 ; i>=0;){
        str2 = str2+str[i];
        i=i-1;
    }
    if(str === str2){
        return true;
    }

    return false;
}

removeDuplicate () {

let str = '' ;
let str1 = '' ;
let current = this.head;
if (current === null){
return 'empty linked list';
}

while (current){
   str = current.value;
   str1 = current.next.value;
   console.log(str , 'hhhh' ,str1 );
   
if(str === str1){
     current.next = current.next.next;
}
current=current.next;

}
return this;
return 'no duplicate';
}


}


 function merge (link1,link2){

         let currentLink1 = link1.head;
         let currentlink2 = link2.head;
         let linkNew = new LinkedList();
         let node = new Node( currentlink2.value);
        //   let node1 = new Node(currentLink1.value);
         let node1 = linkNew.insert(currentLink1.value);
         linkNew.head = node;
        let current =  linkNew.head;
while (currentLink1.next || currentlink2.next){
current.next =  node1 ;
currentLink1 = currentLink1.next;
linkNew.insert(currentLink1.value);
linkNew.insert(currentlink2.value);
currentlink2 =  currentlink2.next;
}
      return   linkNew;                
                             

}



x = new LinkedList();
y = new LinkedList();
x.insert(1);
x.insert(8);
x.insert(2);
x.insert(7);


y.insert(11);
y.insert(18);
y.insert(12);
y.insert(17);
y.toString()
// x.remove(5)
// console.log( x.palindroma(x.toString()));
// console.log(x.removeDuplicate().toString());

console.log(merge(x,y).toString());

