function executeFunctions(funcArray){

    for (let  i = 0; i< funcArray.length; i++){
        if(typeof funcArray[i] === 'function') funcArray[i]()
    }
}



function sayHi() { console.log('Hi') }
function sayBye() { console.log('Bye') }

executeFunctions([sayHi, "Oops", , sayBye])
// Output:
// Hi
// Bye