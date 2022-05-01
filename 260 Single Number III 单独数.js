Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.


/**
 * @param {number[]} nums
 * @return {number[]}

 nums = [1,2,3,1,4,2];

 用nums里的数代表index，obj[item]记录的就是item
 这个index出现的次数。例如，obj[1]不存在的时候，证明1只有一个
 于是obj[1]=1;如果obj[1]存在，那就证明至少1是有两pair。
 */

给定一个数组，只有两个数出现了一次，其他的数都出现了两次，找到这两个出现了一次的数
nums = [1,2,3,1,4,2];

var singleNumber = function(nums) {
    var obj = {}
    var res = []
    nums.forEach(item => {
        if(obj[item]){
            delete obj[item]
        }else{
            obj[item] = 1
        }
    });

    /*obj ={ '1': 1, '2': 1}*/
    for(let key in obj){
        res.push(key)
    }
    return res
};

Delete 用于obj
Slice用于array
