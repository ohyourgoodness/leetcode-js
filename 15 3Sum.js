Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

找到相加得0得三个项，且不重复
思路：首先讲所有的数字从小到大排序，
既然3个数之和等于0，
那么这三个数中最小的数一定<0，抓住这个规律，确定一个数，
之后另外两个数进行比对。
nums.sort((a, b) => a - b);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/nums = [-1,-2,-2,0,1,2]/


var threeSum = function(nums) {
    nums = nums.sort(function(a, b) {
        return a - b
    }); //先排序
    var i = 0;
    var arr = []; //结果数组
    while (i < nums.length - 1) {
        var a = nums[i],
            j = i + 1,
            k = nums.length - 1;
        while (j < k) {
            var b = nums[j],
                c = nums[k];
            var sum = a + b + c;
            if (sum == 0) arr.push([a, b, c]); //存起来
            if (sum <= 0)
                while (nums[j] == b && j < k) j++; //第2个数
            if (sum >= 0)
                while (nums[k] == c && j < k) k-- //最后一个数
        }
        while (nums[i] == a && i < nums.length - 1) i++; //第一个数
    }
    return arr
};
