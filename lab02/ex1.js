'use strict'
// FORMA NORMAL
function countDigitsv1 (n) {
let digitos = 0
let casa = 1
while(n/casa >=1 || n/casa <= -1){
    digitos++
    casa = casa * 10
}
return digitos
}

console.log("// -> ",countDigitsv1(100000))
console.log("// -> ",countDigitsv1(-100000))
// FORMA ANONIMA
const countDigitsv2 = function(n) {

    return countDigitsv1(n)
}

console.log("// -> ",countDigitsv2(100000))
console.log("// -> ",countDigitsv2(-100000))
// FORMA ARROW
const countDigitsv3 = (n) => countDigitsv1(n)

console.log("// -> ",countDigitsv3(100000))
console.log("// -> ",countDigitsv3(-100000))

console.log("// -> ",countDigitsv1(0))
console.log("// -> ",countDigitsv2(0))
console.log("// -> ",countDigitsv3(0))
console.log("// -> ",countDigitsv1(1))
console.log("// -> ",countDigitsv2(1))
console.log("// -> ",countDigitsv3(1))