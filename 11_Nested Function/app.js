// function created inside another function 
// it very useFull in the closure 
// inner function can access the outer function variables data 
// outer function can't access the inner function data 
"use strict";
function outerFunction (){
    var outerVar = "I am from outer function";
    function innerFunction(){
        console.log("inner function "+outerVar)
        console.log(this)// undefined
    }
    innerFunction();
}

outerFunction();
