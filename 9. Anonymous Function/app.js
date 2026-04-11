// anonymous function 
// simple function without name is know as anonymous function 
// named function has it name : 

// use in callback function 
// event handler we use this anonymous function 
// in this every time re-create the function to prevent we extract and created outside the 
// jsx

const handleClicked = () => {
    console.log("clicked");
}

<button onClick={handleClicked}>
    Click Me
</button>
// inline arrow function is also know as anonymous function 

// all the array methods take the callback function which is almost all are the
// anonymous function 
