//1. Create a setup for Express Web 

const express = require('express');//importing express package

const app = express();//using express function we create the request for app
const adminRoutes = require("./Router-student/student-router")
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

//4. Create API's in default setup - getStudentDetails 
//- Pass Student info like - Name, Age, Address, Session as query string

app.get('/getStudentDetails', (req, res) => {
    res.json(
    {
        Name: "Gauri Kumari",
        Age: 23,
        Address: "Wisconsin",
        Session: "2023"
    }
    
)
}
);

//5. Save this information received in #4  to a file named studentIfo using fs module async way

fs.writeFileSync('studentInfo.txt', 'Name: Gauri Kumari, Age: 23, Address: Wisconsin, Session: 2023')

//6. Create a setup for webpack






app.listen(3000, () => {
    console.log("API is running at http://localhost:3000")
}
);


