/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    function recur(current, start, end) {
        if (current.length === n * 2) {
            res.push(current);
            return
        }

        if (start < n) {
            recur(current + "(", start + 1, end);
        }

        if (end < start) {
            recur(current + ")", start, end + 1)
        }
    }

    recur("", 0, 0);

    return res;
};

console.log(generateParenthesis(2))
console.log(generateParenthesis(3))