/**
 * HashTable = [ key ] ==> [[ BlackBox_HashFunction(key):memory address ]] ==> 001210 [key,value]
 * HasTable don't works in order , random address can be assigned to any new inserted value
 * HashFn is very quick we will not consider its complexity
 * HashTable => [[ insert , delete , search , lookup ]] ==== O(1)
 * Array => [[ insert , lookup ]] ==== O(1)  [[ delete , search ]] ==== O(n)
 * HashCollision => some time same address is allocated to the some other key/Value pair.
 * HashFunction => a function which get key as an input will provide some compltex o/p which will be same all the time.
 * Map and Set are wrapper above the Hastable and maintain the insertion order.
 * In Hastable/Object allows u only string as a key , but in Map and Set allows u any datatype as key
 * Set only stores Key.
 */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < Math.min(key.length, 20); i++) {
      // limit the hash function to run till 20 times or below
      // if the key is exceeding 20 characters
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // O(1)
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    // O(1)
    const address = this._hash(key);

    if (!this.data[address]) return undefined;

    for (let i = 0; i < this.data[address].length; i++) {
      // if hash collision - O(n/k) k = size of array == O(n)
      if (this.data[address][i][0] === key) {
        return this.data[address][i][1];
      }
    }
  }

  keys(key) {
    // O()
    if (!this.data) return [];

    var keys = [];
    for (let i = 0; i < this.data.length; i++) {
      keys.push(...this.data[i].map((x) => x[0]));
    }
    return keys;
  }
}

let map = new HashTable(2);
map.set("name", "nikhil");
map.set("age", 28);
map.set("address", "abc Street");
console.log(map.data);
console.log(map.get("address"));
console.log(map.keys());

/**
 * *  Diffrence b/w Map ans Set and normal JS Object
 *
 */

let obj = {
  name: "Nikhil",
};

let obj1 = {
  name: "Srivastava",
};

function fn() {}

function fn1() {}

let testObj = {};

testObj[obj] = "Using obj as key in testObj";

testObj[obj1] = "Using obj1 as key in testObj";

testObj[fn] = "using fn as key in testObj";

testObj[fn1] = "using fn1 as key in testObj";

// ? Internally JS convert keys into string
// ? for object its uses [object Object]
// ? for function its used the whole function signature as key
console.log(testObj);

console.log(testObj[obj]);

console.log(testObj[fn1]);

let map1 = new Map();

map1.set(obj, obj);
map1.set(obj1, obj1);
map1.set(fn, fn);

map1.set("name", "nikhil");
map1.set("name1", "nikhil");
map1.set("name2", "nikhil");

{
  let map1 = new Set();
  map1.add("nikhil");
  map1.add("nikhil");
  map1.add("nikhil");
  console.log(map1);
}

console.log(map1);

{
  window.alert = window.console.log;
  let map = new Map();

  map.set("1", "str1"); // a string key
  map.set(1, "num1"); // a numeric key
  map.set(true, "bool1"); // a boolean key

  // remember the regular Object? it would convert keys to string
  // Map keeps the type, so these two are different:
  alert(map.get(1)); // 'num1'
  alert(map.get("1")); // 'str1'

  alert(map.size); // 3
}
