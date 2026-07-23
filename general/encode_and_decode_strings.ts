/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    let r: string = ''
	for (const str of strs) {
        const l: number = str.length;
        r += `${l}#${str}`;
    }

    return r;
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    const ans: string[] = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        while (s[j] !== '#' && j < s.length) {
            j++;
        }

        const length = Number(s.slice(i, j));
        ans.push(s.slice(j + 1, j + 1 + length));    

        i = j + 1 + length;
    }
    
    return ans
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/**
 * 271. Encode and Decode Strings
 */