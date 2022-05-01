var arr = [1,2,3,[1,2,3,1,3,[1,2,3,6,4,[1,2,3,1]]],2];
function getDeep(arr){
  let a=1;
  function multiarr(arr){
    for (i=0;i<arr.length;i++){
      if(arr[i] instanceof Array){
        a++;
        arr = arr[i];
        multiarr(arr);
      }
    }
    return a;
  }
  return multiarr(arr);
}
//4
