//QUESTION2

var value;

value = "Robert"
console.log(value, typeof value)

value = 0.0266
console.log(value, typeof value)

value = false
console.log(value, typeof value)

value = {myname: "Test Me"}
console.log(value, typeof value)

value = 25166665
console.log(value, typeof value)

value = undefined
console.log(value, typeof value)

value = true
console.log(value, typeof value)

value = "Robert Jr"
console.log(value, typeof value)

value = null
console.log(value, typeof value)

value = {}
console.log(value, typeof value)

value = -32767
console.log(value, typeof value)

//QUESTION3
function showUserInfo(firstName, lastName, age) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
  }

//QUESTION4
function doAddition(a, b, c) {
    return a + b + c;
  }

console.log(doAddition(2, 3, 4)); // Returns 9 since 3 parameters are expected and three numbers are provided
console.log(doAddition(2));// will return NaN since 3 parameters are expected and only one number is provided so the remaining two are undefined
console.log(doAddition(2.3, 3));// will return NaN since 3 parameters are expected and only two numbers are provided so the remaining one is undefined
console.log(doAddition("first", 2, "three"));// will return first2three since 3 parameters are expected and two strings are provided so it concatenates the strings and the number is converted to string

//QUESTION5
var impTopics = require("../topics.js")
console.log(impTopics)

//QUESTION6

//CLOSURE
function mySelf (firstname, Lastname, age){
    var myFirstName = firstname;
    var myLastName = Lastname;
    var myAge = age;

    var myPersonalInfo = function (userId, password){
        if (userId === "admin" && password === "admin"){
            console.log("Welcome " + myFirstName + " " + myLastName + " " + myAge)
        } else {   
            console.log("Invalid Credentials")
        }
    }
    return myPersonalInfo
}

//OBJECTS
var myInfo = {
    firstName: "Robert",
    lastName: "Downey",
    age: 55,     
}

//PROTOTYPE
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };

var myName = new Person("Gauri", "Kumari")
console.log(myName.getFullName())

//QUESTION7
const me = Object.create(null);
me.name = "Gauri";
me.age = 22;
me.hello = function () {
    console.log("Hello, I am " + this.name + "!");
    };

    console.log(me.name);
    console.log(me.age);
    console.log(me.hello());

//QUESTION8
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
     console.log('Index: ' + i + ', element: ' + arr[i]);
   }, 3000);
 }

//The output will be Index: 4, element: undefined. 
//This happens bacause the value of i is 4 when the setTimeout function is executed. 
//The setTimeout function is executed after 3 seconds and by that time the value of i is 4. 
//Since the array has only 4 elements, the value of arr[4] is undefined.