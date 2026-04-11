
// callback function  90 % use in the react and js 
// a function that passes as another function as argument and called it later 
// callback function 

function greet(name , callback){
    console.log("hello"+ name);
    callback();// called the callback function
}
function sayBye(){
    console.log("goodbye!");
}

// sayBye is the callback function 

greet("Alice", sayBye);
// js is asynchronous is nature it help to run after doing something 
// order pizza => wait -> eat 

// event handler 
// button.addEventListener("click", ()=>{
// });
//()=>{
    //  this is a callback function 
// }
//  if we nested down it create the callback hell problem to solve this we have to 
// use the promises and async and await 

