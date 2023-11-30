// create a function arithmatic calculation
// inside that pass, two params
// create 4 different functions - Sum, Substract, Multiply and Divide
// If we pass Sum it should do Sum, same way Substract, Multiply and Divide

 function arithmaticCalculation(a, b, CallBackFunction){
    return CallBackFunction(a,b)
 }     

 function sum(a, b){
    return a + b;
 }

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log(arithmaticCalculation(2, 3, sum))
console.log(arithmaticCalculation(2, 3, substract))
console.log(arithmaticCalculation(2, 3, multiply))
console.log(arithmaticCalculation(2, 3, divide))