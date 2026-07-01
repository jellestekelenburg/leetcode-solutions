/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const ans = [];

    function recur(index, current) {
        if (index === digits.length) {
            ans.push(current);
            return
        }

        const numbers = phone[digits[index]];

        for(const number of numbers) {
            recur(index + 1, current + number)
        }
    }

    recur(0, "");
    return ans;
};
/**
 * 17. Letter Combinations of a Phone Number
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 *
 * Example 1:
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * Example 2:
 *
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 *
 * Constraints:
 *
 * 1 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 */

console.log(letterCombinations('23'))
// console.log(letterCombinations('2'))