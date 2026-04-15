// async function in the javascript : 
// async function always return a promise 
async function hello(){
    console.log("hello");
    return "ashutosh";
}
console.log(hello()); // promise object return that have the value 

hello();

// in api calling we modern we use await : 
// await pause the execution of the code and wait for the full fill ment of the 
// asynchronous operation 

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await  response.json();
    console.log(data);
    return data;
}
fetchData();

// before async await we use .then and catch block , sytax 
// await only work inside the async function 

console.log("Start");

function test() {
  console.log("Inside");
}

test();
console.log("End");


start 
inside 
end 

// normal function execute code asynchronously 
