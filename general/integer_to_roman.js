/**
 * @param {number} num
 * @return {string, number}
 */
var intToRoman = function(num) {
    let arr =  Array.from(String(num))
    const numKey = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const numItem = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let left = 0;
    let ans = '';

    if (num > 4000) {
        return 'MMMCMXCIX'
    }
    if (num < 1) {
        return ''
    }

    for (let right = arr.length; right > 0; right--) {
        let calc = arr[left] * Math.pow(10, right - 1)
        let i = 0;
        while (calc > 0) {
            if(numKey[i] <= calc) {
                ans += numItem[i];
                calc -= numKey[i];

            } else {
                i++;
            }
        }

        left++;
    }

    return ans
};
