// hof : higher order function in the javascript :
// higher order function : that take one or  more function as argument
// a function that return a function eg. closure , etc
// these are the two condition one of them are must be followed  then we can say that
// that function is hof ( higher order function )
// this concept is completely align in react with hoc : higher order components


// it do't follow the dry : don't repeat yourself  principle 


const greet = function (fn) {
    fn();
}
const callback = function () {
    console.log("hello ashutosh!");
}

greet(callback);

const outer = function () {
    let count = 0;

    return () => {
        console.log(count);
        ++count;
    }
}

// outer function return a inner function that why outer function is a hof :
// hof : higher order function 
const count = outer();
count();  // 0
count();// 1
