Given n non-negative integers a1, a2, ..., an ,
where each represents a point at coordinate (i, ai).
 n vertical lines are drawn such that the two endpoints of
the line i is at (i, ai) and (i, 0). Find two lines, which,
together with the x-axis forms a container, such that the
container contains the most water.

下边这个方法是观察到了这道题目的特点，就是中间的柱子围城的面积如果要比两边的柱子多的话，那么中间的柱子高度一定要比两边的高，因为中间柱子之间的距离短。
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let most = -1;

  while (left < right) {
    let small = Math.min(height[left], height[right]);
    let count = small * (right - left);

    if (most < count) {
      most = count;
    }

    if (height[left] < height[right]) {
      left++;
    }
    else {
      right--;
    }
  }

  return most;
};
