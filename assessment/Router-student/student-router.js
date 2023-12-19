//Configure a route name - Student

const express = require('express');//importing express package

const app = express();//using express function we create the request for app


app.get('/', (req, res) => {
    res.send('Hello World');
}
);

//module.exports = router
