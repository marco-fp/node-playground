// is “a” substring of “b”
function isSubstring(a, b) {
    return b.includes(a);
}

// s1: waterbottle
// s2: erbottlewat
// check if s2 is a rotation of s1
// using one call to isSubstring

function isStringRotation(s1, s2) {
    const doubleStr = s2 + s2;
    return isSubstring(s1, doubleStr);
}

console.log(isStringRotation("waterbottle", "erbottlewat"))