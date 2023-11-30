//1. Example of bind function on browser, we must be able to change object on click
   
    /*{<button id="btn">Click me</button>}
    var btn = document.getElementById('btn');
    var click = function(){
        alert(this.name);
    };

    btn.addEventListener('click', this.click.bind(myName), false);//bind function returns a new function with the same body and scope as the original function but this is bound to the first argument passed to bind function
    btn.addEventListener('click', this.onclick, false);//

    var myName = {
        name: "Gauri",
        age: 25
    };

    btn.removeEventListener('click', this.onclick, false);*/


//2. Create object without prototype and then inherit it

    var obj = Object.create(null);
   
    obj.name = "Gauri";
    obj.age = 23;

    console.log(obj);

    var obj1 = Object.create(obj);
  
    obj1.name = "Gauri Kumari";
    obj1.location = "Wisconsin";

    console.log(obj1);


//3. Create a function to populate user details.
//func - popularDetail prints Address and accepts a callBackFunction which prints Name, Age, Topic


    function populateDetails(user, callbackFunction) {
        var address = user.address;
        console.log("Address:", user.address);
        callbackFunction(user.name, user.age, user.topic, address);
  }

    var userObject = {
        name: "Gauri Kumari",
        age: 23,
        topic: "JavaScript",
        address: "Wisconsin"
    };

    function printDetails(name, age, topic, address) {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Topic:", topic);
        console.log("Address:", address);
    }

    populateDetails(userObject, printDetails);


//4. JavaScript currying is achieved by returning functions from functions. Here the outer
//function (print) supplies the printing to be used while the returning function allows the 
//caller to supply the name of the printer.

    function print(printer) {
        return function (message) {
        console.log(printer + ':' + message);
        }
    }

    var consolePrint = print('console');
    var alertPrint = print('alert');
    var logPrint = print('log');

    consolePrint('Hello World');
    alertPrint('Hello World');
    logPrint('Hello World');


//5. Create two objects UserDetail (Properties should be Name, Age, Street) and
//UserAddress (Name, Street, city, Zipcode), merge both of them in the UserDetail

    var userDetail = {
        name: "Gauri Kumari",
        age: 23,
        street: "Wisconsin"
    };

    var userAddress = {
        name: "Gauri Kumari",
        street: "Wisconsin",
        city: "Madison",
        zipcode: 53711
    };

    var user = Object.assign(userDetail, userAddress);

    








    





    