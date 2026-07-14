/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        max = Math.max(max, width * h);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([1,1,5,6,1,2,3,6,65,5,4,1,8,7,6,9,5,6,7,8,9,4,3,5,6,7]))