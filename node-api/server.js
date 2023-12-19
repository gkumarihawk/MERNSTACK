//console.log("Creating API using Node.js and Express.js")

const express = require('express');//imprting express packagr and using top level express method
const app = express();//using express function we 

const adminApp = express();//using express function we the request for adminApp
const adminRoute = require('./Router/admin-route.js')//importing admin-route.js file
app.use('/static', express.static('public'));//using express function we



app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.get('/info', (req, res) => {
    res.json(
        {
            name: "Gauri Kumari",
            age: 23,
            topic: "JavaScript",
            address: "Wisconsin",
            phone: "123-456-7890",
            email: "gmail.com"

        }
    );
}
);

//api using query string=> localhost:3000/query?name=gauri&age=23&address=wisconsin&id=25
app.get('/query', (req, res) => {
    let qs = req.query;//request object converts query string in JSON
    console.log

    if(qs.id==25){
        res.json(qs)
    }
    else{
        res.send("Invalid ID")
    }
}
);

//api using route param => localhost:3000/routeParam/25
app.get('/routeParam/:id', (req, res) => {
    let param = req.params['id'];//request object converts query string in JSON
    //console.log(param)
    
    res.json(param)
    if(param==25){
        res.send("Valid ID")
    }
    else{
        res.send("Invalid ID, Please use valid ID")
    }
}
);

app.get('/file', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
}
);

app.get('/static.js', (req, res) => {
    res.sendFile(__dirname + "/public/static.js")
}
);

app.use('/admin', adminApp)
adminApp.use('/', adminRoute)



//default or wild card operator to serve request for any request

/*app.get('*', (req, res) => {
    let devicetype = req.rawHeaders.indexOf('Android') > -1 ? 'Android' : 'iOS'
    console.log(devicetype)

    res.send("<h1>Device type is " +devicetype+"</h1>")

    //res.send("<h1>API is not ready yet</h1>")
}
);*/




app.listen(3000)

console.log("API is running at http://localhost:3000")