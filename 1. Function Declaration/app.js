// function declaration is the hoisted in nature : 
// during the memory allocation of the all the variable and function in the gec : 

// gec : global execution context : only 1 global execution context is created inside a js program 
// function declaration body is also hoisted due to this reasion we can call it fd before declaration 

hello(); // before declaration we can call it  function declaration due to hoisting 

function hello(){
    console.log("hello!");
}

// hoisted : 
// var is the also in hoisted in nature : 

console.log(name); // undefined

// var is hoisted during creation phase or memory allocation phase 
var name = "Ashutosh";
// value is assign during execution of the code 



