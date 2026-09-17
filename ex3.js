function showProperties(obj){
 for( const key in o){
    console.log(key,":", typeof o[key])
 }

}


const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
showProperties(o)
// → a: number
// → b: string
// → c: object
// → d: object