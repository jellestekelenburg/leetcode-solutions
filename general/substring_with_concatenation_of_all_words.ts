function findSubstring(s: string, words: string[]): number[] {
  const ans: number[] = [];
  const wordLength = words[0].length;
  const sliceLength = wordLength * words.length;
  const required = new Map<string, number>();

  for (const word of words) {
    required.set(word, (required.get(word) ?? 0) + 1);
  }

  for (let i = 0; i <= s.length - sliceLength; i++) {
    const seen = new Map<string, number>();
    let valid = true;

    for (let j = 0; j < words.length; j++) {
      const word = s.slice(i + j * wordLength, i + (j + 1) * wordLength);

      const allowed = required.get(word);

      if (allowed === undefined) {
        valid = false;
        break;
      }

      const count = (seen.get(word) ?? 0) + 1;

      if (count > allowed) {
        valid = false;
        break;
      }

      seen.set(word, count);
    }

    if (valid) {
      ans.push(i);
    }
  }

  return ans;
}

/**
 *
 * 30. Substring with Concatenation of All Words
 *
 * You are given a string s and an array of strings words. All the strings of words are of the same length.
 *
 * A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.
 *
 * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
 * Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.
 */

// console.log(findSubstring('barfoofoothe', ["bar","foo","the"]))
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "foo"]));
