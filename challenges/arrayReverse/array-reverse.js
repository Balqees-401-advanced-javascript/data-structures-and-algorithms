'use stict'

let arr=[89, 2354, 3546, 23, 10, -923, 823, -12];
function reverceArray(arr){
 let newArray=[];
 for (let i =arr.length-1  ; i<=arr.length && i>=0 ; i--){
    newArray.push(arr[i]);
 }
 return newArray;
// console.log(newArray);
}

reverceArray(arr);