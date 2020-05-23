'use strict'
let arr = [11,22,33,44,55,66,77];

function search(arr,num){
    if(arr.includes(num)){
        for (let i=0 ; i<arr.length ; i++){
            if (arr[i] === num){
                return i;
            }
        }
    }
             else {
                       return -1;
                    }
                      }
                      
search(arr,90)