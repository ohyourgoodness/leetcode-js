function binarySearch(arr, key){
     let low = 0;
     let high = arr.length - 1;

     while(low < high){
         let mid = Math.floor((high + low)/2);
         if(key == arr[mid]){
             return mid;
         }else if(key > arr[mid]){
             low = mid + 1;
         }else if(key < arr[mid]){
             high = mid - 1;
         }else{
             return -1;
         }
     }
}
