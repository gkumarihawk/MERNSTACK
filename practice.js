//Create a constructor function with name account and add properties like -- Acctype, Name, Balance etc.

function account (Acctype, Name, Balance){
    this.Acctype = Acctype
    this.Name = Name
    this.Balance = Balance

 //question2"   
    this.getAccountDetails = function(){
        return this.Acctype + this.Name + this.Balance;
    }
}

//question3
(function IIFE (name){
    //console.log(name)
})("Gauri")
//console.log(IIFE("GAURI"))
console.log(add)
//console.log(add(1,2,3))
//question4
function add(param1, param2){
    //console.log("Gauri")
    sum = param1+param2;
    return sum;
}

function add(param1, param2, param3){
    sum = param1+param2+param3
    return sum;
}

//console.log(add(1,2))
//console.log(add(1,2,3))

//question5

//var add = function (a,b){
//    return a+b
//}
//console.log(add(1,2))

var add = function (a,b,c,d){
    console.log("Gauri")
    return a+b+c+d
}
//console.log(add(1,2,3,4))
//console.log(add(1,2))
//console.log(add(1,2,3))



//Hoisting happens for function which has complete definition
//For variable its undefined value.
