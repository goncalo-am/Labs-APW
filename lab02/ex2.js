
let acc;
{
    let c = 0; // this local variable remains in the closure scope
    acc = function (inc){
        c += inc;
        return(c);
    }
}console.log(acc(1));
// → 1
console.log(acc(4));
// → 5
console.log(acc(7));
// → 12