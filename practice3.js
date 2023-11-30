//print firstname and sessionTopics, 

let StudentTest = { firstname: "Gauri", address: "Madison", sessionTopics: {covered1: "coreJS", covered2: "OOJS"} };

//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest using object destructuring

let {firstname, sessionTopics, lastname = "Kumari", sessionTopics: {covered3 = "ES6"}} = StudentTest;

console.log(firstname);
console.log(sessionTopics);
console.log(lastname);
console.log(covered3);


//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0 using for of and for in loop


//using for of loop
function multiply(a,b,){
    
}


//using for in loop
/*function multiply(a,b,c){
    if (a===undefined || b===undefined || c===undefined){
        return 0;
    }
    let result = 1;
    for(let i in arguments){
        result *= arguments[i];
    }
    return result;
}*/

console.log(multiply(2, 3, 4));
console.log(multiply());
console.log(multiply(2, 3));

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1, 2, 3, 4, 5];
arr[arr.length] = 6;
console.log(arr);



//create an example of const where we can update on property of the object, where it says const is mutable

const obj = {
    name: "Gauri",
    age: 25
}   

obj.name = "Gauri Kumari";
console.log(obj.name);//Here we can update the property of the object but we cannot reassign the object to another object because it is const and it is immutable


//create a for loop using var and let, print each value in timeout after 2 second and to demonstrate functional scope of var and lexical of let 

for(var i = 0; i < 5; i++){//var is functionally scoped which means it is scoped to the function in which it is defined
    setTimeout(function(){
        console.log(i);
    }, 2000);
}   

for(let i = 0; i < 5; i++){//let is lexically scoped which means it is scoped to the block in which it is defined
    setTimeout(function(){
        console.log(i);
    }, 2000);
}