// Find All Anagram in string

/**
 * Sliding Window Pattern - (  Acquire and Release )
 * @param {*} source : a b c a d b a c
 * @param {*} pattern : a b c
 */

function findAnagramString(source, pattern) {
  let pMap = {};
  let sMap = {};

  for (let ch of pattern) {
    pMap[ch] = (pMap[ch] || 0) + 1;
  }

  for (let ch of pattern) {
    sMap[ch] = (sMap[ch] || 0) + 1;
  }

  let i = pattern.length;
  let count = 0;
  let indexes = [];

  while (i < source.length) {
    if (compare(pMap, sMap)) {
      count++;
      indexes.push(i - (pattern.length));
    }

    delete sMap[source.charAt(i - pattern.length)];
    sMap[source.charAt(i)] = (sMap[source.charAt(i)] || 0) + 1;

    i++;
  }

  if (compare(pMap, sMap)) {
    count++;
    indexes.push(i - (pattern.length));
  }

  console.log(count, indexes.join(' -> '));
}

function compare(pMap, sMap) {
  for (let prop in sMap) {
    if (pMap[prop] !== sMap[prop]) {
      return false;
    }
  }
  return true;
}

findAnagramString("abcadbac", "abc");
