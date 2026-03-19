/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    function expand(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]
    }

    for(let i = 0; i<s.length; i++) {
        let [l1,r1] = expand(i, i) //odd
        let [l2,r2] = expand(i, i + 1) //even

        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }

        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.slice(start, end + 1)
};

/*
Longest Palindromic Substring
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */