/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xs = String(Math.abs(x));
    let arr = [];
    let minus = false;

    if (x < 0)
        minus = true;

    for (let i = xs.length - 1; i >= 0; i--) {
        arr.push(xs[i]);
    }

    let ans = Number(arr.join(''));

    if (minus)
        ans *= -1;

    if (ans < -(2**31) || ans > 2**31)
        return 0;

    return ans
}

console.log(reverse(-1))
console.log(reverse(23402))
console.log(reverse(-688));

/*
7. Reverse Integer
Solved
Medium
Topics
premium lock icon
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

 */