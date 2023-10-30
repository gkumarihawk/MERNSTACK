//Create an object with name Person and have some properties in it

var Person = {
    Name : "Gauri",
    Age : 23,
    Language : "English",
    personInfo : function (){
        return {
            Name : this.Name,
            Age : this.Age,
            Address : this.Address

        }
    }
}


//inherit person object to create new object Student - 
//this should have  two properties additional and one method
var Human = new Object (Person);

Human.LastName = "Kumari"
Human.Address = "Wisconsin"

Human.getAdditinalInfo = function (){
    return{
        LastName : this.LastName,
        Address : this.Address
    }
}

//Create one object Jobs - (JobTitle, Salary, Location) and one object Student with salary

var Jobs = {JobTitle : "Student", Salary : "$25,000", Location : "Chicago"}

var Student  = {salary : "$5,000"}


//Merge person and salary so that salary comes from jobs object

var merge = {}
merge = Object.assign (Person, Jobs)


//Create a null prototype object

var obj = {}

