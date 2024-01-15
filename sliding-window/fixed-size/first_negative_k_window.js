const arr = [12, -1, -7, 8, -16, 12, 16, 28];

//* https://www.youtube.com/watch?v=uUXXEgK2Jh8&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=4

/**
 * * brute force
 * * TC: O(n2)
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function first_negative_k_window_brute(arr, k) {
  const result = [];

  let i = 0;

  while (i < arr.length) {
    for (let j = i; j < k + i; j++) {
      if (arr[j] < 0) {
        result.push(arr[j]);
        break;
      }
    }
    i++;
  }

  for (let i = 0; i < arr.length - k + 1; i++) {
    result[i] = result[i] || 0;
  }

  return result;
}

//const result = first_negative_k_window_brute(arr, 3);

// /**
//  * * optimised
//  * * TC: O(n)
//  * @param {*} arr
//  * @param {*} k
//  * @returns
//  */

// * [12, -1, -7, 8, -16, 12, 16, 28]
function first_negative_k_window(arr, k) {
  let queue = [];
  let result = [];

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) {
      queue.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if(!queue.length) {
        result.push(0);
      } else {
        if(arr[i] < 0) {
          result.push(queue.shift());
        } else {
          result.push(queue[0]);
        }
      }
      i++;
      j++;
    }
  }
  return result;
}

const result = first_negative_k_window(arr, 3);

console.log(result);
