// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil


    const heroes = [
       { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
       { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
       { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
       { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
       { name: 'Batman',         family: 'DC Comics', isEvil: false },
       { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
       { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
       { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
       { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a. Get heroes who are not evils

let notEvil = heroes.filter(hero => hero.isEvil === false);
console.log(notEvil);

//b. Print Unique family names

let uniqueFamily = heroes.reduce((prevVal, currVal, index, list)=>{
    prevVal.add(currVal.family)
    return prevVal
}
, new Set())

console.log(uniqueFamily);

//c. Print the Hero Names from given objects, and append sir in each of them before printing

let heroNames = heroes.map(hero => "Sir " + hero.name);
console.log(heroNames);

//d. Do we have any hero in Marvel Family who is not evil

let marvelNotEvil = heroes.some(hero => hero.family === "Marvel" && hero.isEvil === false);
console.log(marvelNotEvil);



//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

//map example with 4 different features of map implemented: get, set, clear, has

let map = new Map();
map.set("name", "Gauri");
map.set("age", 23);
map.set("location", "Wisconsin");
console.log(map.get("name"));
console.log(map.has("age"));
map.clear();
console.log(map);

console.log("--------------------------------------------------");

//set example with 4 different features of set implemented: add, delete, clear, has

let set = new Set();
set.add("Gauri");
set.add(23);
set.add("Wisconsin");
console.log(set.has("Gauri"));
console.log(set.delete(25));
set.clear();


//3. Create a promise object that get resloved after two seconds and rejected after three. 
//Also the promise object returns five ES6 features on resolved


let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            "Property1" : "Promise",
            "Propoerty2" : "Destructuring",
            "Property3" : "Arrow Function",
            "Property4" : "default parameter",
            "Property5" : "template literal"
        })
    }, 2000);

    setTimeout(() => {
        reject({
            "Property1" : "Promise",
            "Propoerty2" : "Destructuring",
            "Property3" : "Arrow Function",
            "Property4" : "default parameter",
            "Property5" : "template literal"
        })
    }, 3000);
})


console.log(promise)

promise.then((data, err)=>{ 
    console.log(data)
    console.log(err)
}).catch((err)=>console.log(err)) 

console.log(promise)
console.log("Promise Completed!!!");


//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function multiplyNumbers(n, ...numbers) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    console.log(`Product of numbers from 1 to ${n}: ${product}`);

    console.log("Students of the session:");
    for (const student of numbers) {
      console.log(student);
    }
  }
  
  // Example usage
  multiplyNumbers(5, "Gauri", "Khan", "Joseph", "Danny", "Annie", "Queen");


//5. Print the last name through destructuring and add a contact number:9119119110 as well


    const person = {
         userDetails :{
             first: "Gauri",
             last: "Kumari"
        }
    }

    const {userDetails: {last}, contact = 9119119110} = person;
    console.log(last);
    console.log(contact);
    console.log(person);


//6. Give me an example of const data manipulation

const obj = {
    name: "Gauri",
    age: 23
}

obj.name = "Gauri Kumari";
console.log(obj.name);

//7. What is the difference between for-of and for-in show with examples

//for-of loop: It is used to iterate over the values in an iterable object. 
//It can be used to iterate over the values of an array.

let arr = [1, 2, 3, 4, 5];
for(let i of arr){
    console.log(i);
}

//for-in loop: It is used to iterate over the properties of an object. 
//It can also be used to iterate over the index of an array.

let arr2 = [1, 2, 3, 4, 5];
for(let i in arr2){
    console.log(i);
}

//8. Give me an example of bind and write its usage, comparison with arrow function


//bind function: It returns a new function with the same body and scope as the original function but this is bound to the first argument passed to bind function.
/*var btn = document.getElementById('btn');
var click = function(){
    alert(this.name);
};

btn.addEventListener('click', this.click.bind(myName), false);

var myName = {
    name: "Gauri",
    age: 23
};

//arrow function: It is used to preserve the scope of this keyword. It is used to define anonymous functions.
var btn = document.getElementById('btn');
var click = () => alert(this.name);

btn.addEventListener('click', this.click, false);

var myName = {
    name: "Gauri",
    age: 23
};*/



//9. Create an example showing usage of event loop in concurrent execution cycle

//Event loop: It is a single thread that performs all the operations. It is used to handle asynchronous callbacks.

console.log("Start");

setTimeout(() => {
    console.log("Timeout1");

    setTimeout(() => {
        console.log("Timeout2");
    },0);
}, 5000);

setTimeout(() => {
    console.log("Timeout3");
}, 5000);

setTimeout(() => {
    console.log("Timeout4");
}, 5000);

console.log("End");



//10. create an example showing usage of short hand, default param and template literal.

//short hand: It is used to assign values to variables.
let name = "Gauri";
let age = 23;
let location = "Wisconsin";

let me = {
    name,
    age,
    location
}

console.log(me);

//default parameter: It is used to assign default values to parameters.
function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(2));

//template literal: It is used to embed expressions in strings.

console.log(`My name is ${name}. I am ${age} years old. I live in ${location}.`);
