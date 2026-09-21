function deepEqual(a, b) {
    // valores simples
    if (a === b) return true;

    // null é "object" em JS → tratar à parte
    if (a === null || b === null) return false;

    // tipos diferentes → falso
    if (typeof a !== "object" || typeof b !== "object") return false;

    // comparar keys
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    // comparar cada key
    for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}



const object1 = {a: 1, b: [2, 3], c: {d: [4]}}
const object2 = {a: 1, b: [2, 3], c: {d: [4]}}
const object3 = {a: 1, b: [2, 3], c: {d: 4}}


console.log(deepEqual(object1, object2))
// → true
console.log(deepEqual(object1, object3))
// → false