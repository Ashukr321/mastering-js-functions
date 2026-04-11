// function expression is  also hoisted in nature but it goes into tdz ( temporal dead zone): 
// same let and const are also hoisted in nature but store in tdz ( temporal dead zone );
// tdz : time between the variable hoisted and intialization of the variables 

// function expression and arrow function also hoisted but it goes into tdz : unintilize 


greet();// just a variable it goes inside the tdz : temporal dead zone :  

let  greet = function(){
    console.log("hello good morning!");
}
