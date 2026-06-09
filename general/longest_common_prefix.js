/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let length = strs.length;
    let firstItem = strs[0];
    let ans = firstItem.split('');
    let current = 1;

    while (length > 1) {
        for (let i = 0; i< firstItem.length; i++) {
            if (firstItem[i] === strs[current][i]) {

                continue;
            }
            ans.splice(i, 10)
        }
        current++;
        length--;
    }

    return ans.join('')
};

console.log(longestCommonPrefix(["flower","flow","flight"]))