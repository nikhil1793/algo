function longest_substring_with_k_unique(str, k) {
  let i = 0;
  let j = 0;

  let map = {};
  let longest = 0;

  while (j < str.length) {

    //* calculation
    map[str[j]] = map[str[j]] + 1 || 1;

    if (Object.keys(map).length < k) {
      j++;
    } else if (Object.keys(map).length === k) {
      longest = Math.max(longest, j - i + 1);
      j++;
    } else if (Object.keys(map).length > k) {
      while (Object.keys(map).length > k) {
        if(map[str[i]] > 0) {
          map[str[i]] = map[str[i]] - 1;
          //* delete the prop from map if count goes to 0
          if(map[str[i]] === 0) {
            delete map[str[i]];
          }
        }
        i++;
      }
      j++;
    }
  }

  return longest;
}

const result = longest_substring_with_k_unique('aabacbebebe', 3);

console.log(result);
