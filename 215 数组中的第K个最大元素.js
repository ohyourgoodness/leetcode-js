
时间复杂度为: O(NlogN)
空间复杂度为: O(1)O(1)。
这个时间复杂度并不令人满意，让我们试着用额外空间来优化时间复杂度。

var findKthLargest = function(nums, k) {
    nums.sort((a, b)=>{return a-b})
    return nums[nums.length-k-1]
};



用堆来解决
var findKthLargest = function(nums, k) {

    var res = [];//建立一个堆，在堆中保存k个最大数字

    nums.forEach(num =>{
        if(res.length < k){//如果堆中数字个数少于K个，直接push
            res.push(num);
        }else if(num>res[0]){//如何num比堆中最小值要大，那么直接替换堆中的最小值
           res[0] = num;
        }
        //把新的堆，按照从小到大顺序进行排序，保证res[0]是堆中的最小值
        res.sort((a,b)=>{return a-b;});
    });

    return res[0];
};



//用堆，二叉树来解决，堆排序
function swap(arr, i ,j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;
}

234

function heapify(arr, x, length) {
    var l = 2*x+1;
    var r = 2*x+2;
    var largest = x;
    if(l<length && arr[l] > arr[largest]) {
        largest = l;
    }
    if(r<length && arr[r] > arr[largest]) {
        largest = r;
    }
    if(largest!= x) {
        swap(arr, x, largest);
        // 递归交换以下的是否也建好堆.
        heapify(arr, largest, length);
    }
}

var findKthLargest = function(nums, k) {
    var size = nums.length;
    // 建立堆
    for(var i = parseInt(size/2)+1 ; i >=0 ;i --) {
        heapify(nums, i, size);
    }
    // 排序
    for(var j= size-1; j>=size-k; j--) {
        // 得到本次的最大，将最大的与最后一个交换位子
        swap(nums, 0, j);
        heapify(nums, 0, j);
    }
    return nums[size-k];
}



解题思路
遍历数组，将数组元素依次插入堆中
插入堆的过程中，如果堆大小超过k，将堆顶(最小) 的去掉
返回堆顶，此时堆顶就是第k大的元素（比它小的都被去掉了，比它大的在堆下面）

 class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 交换节点位置
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    // 获得父节点
    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    // 获得左节点
    getleftIndex(i) {
        return 2 * i + 1;
    }
    // 获得右节点
    getrightIndex(i) {
        return 2 * i + 2;
    }
    // 上移
    shiftUp(index) {
        if (index === 0) return;

        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    // 下移
    shiftDown(index) {
        const leftIndex = this.getleftIndex(index);
        const rightIndex = this.getrightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    // 插入
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }
    // 删除堆顶
    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        this.heap[0] = this.heap.pop();
        // 对堆顶重新排序
        this.shiftDown(0);
    }
    // 获取堆顶
    peek() {
        return this.heap[0];
    }
    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}

const findKthLargest = (nums, k) => {
    const minHeap = new MinHeap();
    for (const num of nums) {
        // 将数组元素依次插入堆中
        minHeap.insert(num);
        // 如果堆大小超过k， 开始裁员， 将堆顶(最小) 的去掉
        if (minHeap.size() > k) minHeap.pop();
    }
    // 返回堆顶，此时就是第k大的元素
    return minHeap.peek();
};

//
function findKth( a ,  n ,  K ) {
    let stack = [];
    for(let i = 0; i < n; i++){
        if(stack.length < K){
            stack.push(a[i]);
            stack.sort((a, b)=>{return a-b});
            continue;
        }
        if(stack[0] < a[i]){
            let b = stack.shift();
            stack.push(a[i]);
            stack.sort((a, b)=>{return a-b});
            continue;
        }
    }
    return stack.shift();
}
