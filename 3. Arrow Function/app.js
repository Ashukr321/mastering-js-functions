// arrow function : this is also  in hoisted  in nature : 
//  es6 features 

// this is also know as fat arrow function  
// no own this 
// widely use as callback function 
// in the arrow function the context of this keywords take from its parent scope 
// lexical scope  : a function can access variable based on where it is written not where it called 
// this mechanism is lexical scope in js 

// scope:scope refers to where data is defined not where it called 


const printData = (...numbers)=>{
    // rest parameters 

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }
}

// rest parameters 
printData(1,2,3,4,4);
// arrow function widely use  in the functional components in the react 

// it help to write clean code in the react due to this we prefer to use the 
// arrow function in the react to crate the components  

// inline arrow function  
// in this case every time new function created due to this re-render component 
// better approach move function outside the jsx 
// when we move outside the inline arrow function function reference is same this will prevent unnnecessary re-rendering the components 


<Button onClick={handleClick(id)}/> // this wrong ways to pass the argument 
// this execute immediately during render 

//  so inline function in  not always bad now now in this case we have to use this inline arrow funct
// ion 

{/* <Button onClick={()=>handleClick2(id)}/> */}
/// pass the data vai props  or in small we can use the inline arrow function 




