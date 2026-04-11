// currying in the javascript : 
// convert a function  with multiple argument in to sequence of function 

function add (a){
    return function (b){
        console.log(a+b);
    }
}

add(2)(3);