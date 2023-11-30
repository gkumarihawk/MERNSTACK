//create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases

//CALL
 var student = {
     name: "Gauri", 
     subject: ["Maths","Science", "English"]
 }

    function printSubject(subject1, subject2, subject3){
        console.log(this.name + " has attended " + subject1 + " " + subject2 + " " + subject3)
    }

    printSubject.call(student, student.subject[0], student.subject[1], student.subject[2])
    //Call is used to pass the arguments one by one. 

//APPLY
var student = {
    name: "Gauri", 
    subject: ["Maths","Science", "English"]
}

   function printSubject(subject1, subject2, subject3){
       console.log(this.name + " has attended " + subject1 + " " + subject2 + " " + subject3)
   }

   printSubject.apply(student, student.subject)
   //Apply is used to pass the arguments in array.
