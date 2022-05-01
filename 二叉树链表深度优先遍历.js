function tree(node){
     if(!node){
         return;
     }
     console.log(node.value); //处理操作
     tree(node.left);
     tree(node.right);
 }
