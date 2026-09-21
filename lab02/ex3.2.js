<<<<<<< HEAD
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
=======
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
>>>>>>> 60bb0a66a493b375e422e8220478ddb0a63b8028
// Bye