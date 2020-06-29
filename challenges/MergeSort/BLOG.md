#  Merge Sort 

## Challenge
     
     - translate pseudocode to code and test it

### Big o :


    - Time ----> O(n^2) -----> The basic operation of this algorithm is comparison. This will happen n * (n-1) number 
                                of times…concluding the algorithm to be n squared. 

    - Space----> O(1) -----> No additional space is being created. This array is being sorted in place…keeping the space 
                            at constant O(1).     


# Pseudocode : 

  ```
  
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left   
   
  ```


# code :

  ```
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
        arr[k] = right[j]
      }
    
      else {
          arr[k] = left[i]
      }
    
    }
  
  
  ```

#### Tests Only for the first CC

  ```      
      - console.log()
      - npm run test MergeSort.test.js

  ```     

## Solution

[whiteboard](https://github.com/Balqees-401-advanced-javascript/data-structures-and-algorithms/tree/insertionsort/assets/insertionSort)