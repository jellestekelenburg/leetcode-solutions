/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xa = Array.from(String(x))
    let xr = [];
    let ans = false;

    for(let i = xa.length - 1; i >= 0; i--) {
        xr.push(xa[i])
    }

    xa = xa.join('');
    xr = xr.join('');

    if(xr === xa) {
        ans = true
    }

    return ans
};

/*
9. Palindrome Number
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an integer x, return true if x is a palindrome, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 */