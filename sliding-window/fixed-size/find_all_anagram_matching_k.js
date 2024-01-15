function find_all_anagram_matching_k(str, target) {
  let occurenceCount = 0;
  //* target map
  const tMap = {};
  //* source map
  const sMap = {};

  for (let ch of target) {
    tMap[ch] = tMap[ch] + 1 || 1;
  }

  let i = 0;
  let j = 0;

  while (j < str.length) {
    //* calcuation
    sMap[str[j]] = sMap[str[j]] + 1 || 1;

    if (j - i + 1 < target.length) {
      j++;
    } else if (j - i + 1 === target.length) {
      //* ans
      if (compare(tMap, sMap)) {
        occurenceCount++;
      }

      //* do changes for fisrt element removal when window slides to next
      if (sMap[str[i]]) {
        sMap[str[i]] = sMap[str[i]] - 1;
      } else {
        delete sMap[str[i]];
      }

      i++;
      j++;
    }
  }

  return occurenceCount;
}

function compare(sMap, tMap) {
  for (let i in sMap) {
    if (sMap[i] !== tMap[i]) {
      return false;
    }
  }
  return true;
}

const result = find_all_anagram_matching_k("abcadbac", "abc");
console.log(result);
