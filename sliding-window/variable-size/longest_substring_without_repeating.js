/**
 * * here we don't have k that's why we will comapre with
 * * window size
 * * https://www.youtube.com/watch?v=L6cffskouPQ&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=11
 * @param {*} str
 * @param {*} k
 * @returns
 */
function longest_substring_without_repeating_char(str) {
  let i = 0;
  let j = 0;

  let map = {};
  let longest = 0;
  let left = 0;
  let right = 0;

  while (j < str.length) {
    //* calculation
    map[str[j]] = map[str[j]] + 1 || 1;

    if (Object.keys(map).length === j - i + 1) {
      if (j - i + 1 > longest) {
        left = i;
        right = j;
      }
      longest = Math.max(longest, j - i + 1);
      j++;
    } else if (Object.keys(map).length < j - i + 1) {
      while (Object.keys(map).length !== j - i + 1) {
        if (map[str[i]] > 0) {
          map[str[i]] = map[str[i]] - 1;
          //* delete the prop from map if count goes to 0
          if (map[str[i]] === 0) {
            delete map[str[i]];
          }
        }
        i++;
      }
      j++;
    }
  }

  return { longest, substring: str.substring(left, right + 1) };
}

const result = longest_substring_without_repeating_char("pwddee");

console.log(result);
