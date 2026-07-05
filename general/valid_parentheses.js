/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!/^[{}\[\]\(\)]*$/.test(s)) return false
    const stack = [];
    const open = ['{', '[', '('];
    const close = ['}', ']', ')'];
    
    for(let i = 0; i < s.length; i++) {
        const key = s[i];

        if(open.includes(key)) {
            stack.push(key);
        }

        if(close.includes(key)) {
            let reverse = open[close.indexOf(key)]

            if(reverse !== stack.pop()) {
                return false
            }
        }
    }

    return stack.length === 0;
};