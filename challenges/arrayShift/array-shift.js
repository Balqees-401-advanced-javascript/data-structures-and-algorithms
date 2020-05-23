'use strict'

let arr = [4,8,15,23,42];

function insertShiftArray(arr , num){
    let newArray = [];
    let size = arr.length ;
    let middle = Math.round(size/2);

    for (let i=0 ; i< middle ; i++){
        newArray.push(arr[i]);
    }
        if (middle ){
            newArray.push(num);
      }
     
        for (let j=middle ; j < arr.length ; j++){
            newArray.push(arr[j]);
      }
      
     return newArray;
   
    }
   

insertShiftArray(arr , 16)