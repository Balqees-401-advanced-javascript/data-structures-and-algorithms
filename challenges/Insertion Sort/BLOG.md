#  Insertion Sort

     - write a function that sorts an array we have from lowest to highest Value.

## Challenge
     
     - translate pseudocode to code and test it

### Big o :


    - Time ----> O(n^2) -----> The basic operation of this algorithm is comparison. This will happen n * (n-1) number 
                                of times…concluding the algorithm to be n squared. 

    - Space----> O(1) -----> No additional space is being created. This array is being sorted in place…keeping the space 
                            at constant O(1).     


# Pseudocode : 

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp    



# code :

  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let temp = arr[i];
        while( j>= 0 & temp < arr[j]){
          arr[j+1] = arr[j];
          j=j-1;
          arr[j+1] = temp;
        }
      }
       return arr;
  }


#### Tests Only for the first CC
      
      - console.log()
      - npm run test insertionSort.test.js
       
## Solution

[whiteboard](https://github.com/Balqees-401-advanced-javascript/data-structures-and-algorithms/tree/insertionsort/assets/insertionSort)