function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let num1;
let num2;
let operator;

function operate(num1,num2,operator){
    if(operator=="+"){
        add(num1,num2);
    }
    else if(operator=="-"){
        subtract(num1,num2);
    }
    else if(operator=="*"){
        multiply(num1,num2);
    }
    else
    divide(num1,num2);
}