// big problem can be broken into small sub problem  called recursion 
// recursive function : a function call itself call recursive function 

function printNum(n){
    if(n==0)return;
    console.log(n);
    printNum(n-1);
}
printNum(5);
// 5 4 3 2 1 
// 1 2 3 4 5
