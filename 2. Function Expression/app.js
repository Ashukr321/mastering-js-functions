// function expression is  also hoisted in nature but it goes into tdz ( temporal dead zone): 
// same let and const are also hoisted in nature but store in tdz ( temporal dead zone );
// tdz : time between the variable hoisted and intialization of the variables 

// function expression and arrow function also hoisted but it goes into tdz : unintilize 


greet();// just a variable it goes inside the tdz : temporal dead zone :  

var greet = function(){
    console.log("hello good morning!");
}


// a first class function means we js function can treated just like normal function 
// we can store a function into a variable and use it 
