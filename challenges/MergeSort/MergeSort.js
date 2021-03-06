'use strict';

function Mergesort(arr){
    let n = arr.length;
    if (n > 1){
      let mid = Math.floor(n / 2);
      let left = arr.slice(0, mid);
      let right= arr.slice(mid,n);
       Mergesort(left);
       Mergesort(right);
       Merge(left, right, arr);
    }
    return arr;
    }
    
    function Merge(left, right, arr){
      let i = 0;
      let j = 0;
      let k = 0;

    while(i < left.length && j < right.length) {
    if (left[i] <= right[j]){
       arr[k] = left[i]
       i =i + 1
    }
      else{
        arr[k] = right[j]
        j = j + 1
    }
        k = k + 1
}    

      if (i === left.length){
        for ( j ; j<right.length ; j++){
          arr[k] = right[j];
          k = k+1;
        }
      }
    
      else {
        for ( i ; i<left.length ; i++){
          arr[k] = left[i];
          k = k+1;
        }
      }   
    }
  
    

    module.exports = Mergesort;