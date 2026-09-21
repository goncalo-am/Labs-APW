function  makeCounterDigits(digit) {
    let c = 0; 
    return function (num) {
        while(num >0){ 
            if(num%10 == digit)c++; 
            num = Math.floor(num/10)
        }
        
        return(c);
    }
}


const counting1 = makeCounterDigits(1);
const counting5 = makeCounterDigits(5);

console.log("Counting 1:", counting1(1010002));
// → 2
console.log("Counting 1:", counting1(1011111));
// → 8
console.log("Counting 5:", counting5(510));
// → 1
console.log("Counting 5:", counting5(5453));
// → 3