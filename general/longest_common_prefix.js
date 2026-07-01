/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let itemOne = strs[0];
    for (let i = 0; i< strs.length; i++) {
        while (!strs[i].startsWith(itemOne)) {
            itemOne = itemOne.slice(0, -1)
        }
    }
    return itemOne;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))