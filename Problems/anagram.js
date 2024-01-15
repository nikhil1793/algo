/**
 * Regex for removing special character is key here .
 * string.replace(/[^a-zA-Z]/g,"") ===  string.replace(/[^\w]/g,"")
 * 1. used map , and check both  Key and Values
 * 2. used string sort and check the string equality
 */
function isAnagram(str1, str2) {
    var map1 = createMap(str1.replace(/[^\w]/g, "").toLowerCase());
    var map2 = createMap(str2.replace(/[^\w]/g, "").toLowerCase());

    if (Object.keys(map1).length !== Object.keys(map2).length) return false;

    for (let prop in map1) {
        if (map2[prop] !== map1[prop]) return false;
    }

    return true;
}

function isAnagram2(str1, str2) {
    var s1 = str1.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    var s2 = str2.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    return s1 === s2;
}

function createMap(arr) {
    var map = {};
    for (let prop of arr) {
        map[prop] = (map[prop] + 1) || 1;
    }
    return map;
}

var result = isAnagram("Rail! safety", "fairy tales");
console.log(result);

var result = isAnagram2("Rail! safety", "fairy tales");
console.log("Anangram Logic 2 : ",result);