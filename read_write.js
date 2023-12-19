//Save the data in json object that are making MERN stack and MEAN  stack as acronym

//MERN stack

let MERN = {
    M : "MongoDB",
    E : "Express",
    R : "React",
    N : "Node"
}

//MEAN stack

let MEAN = {
    M : "MongoDB",
    E : "Express",
    A : "Angular",
    N : "Node"
}

//Write using writestream and also read and print using readstream upon finish

const fs = require("fs");

let writeStream = fs.createWriteStream("stack.json");
writeStream.write(JSON.stringify(MERN));
writeStream.write(JSON.stringify(MEAN));
writeStream.end();

writeStream.on("finish", () => {
    console.log("Write completed");
    let readStream = fs.createReadStream("stack.json");
    readStream.on("data", (data) => {
        console.log(data.toString());
    })
}
)

//expand it like - M-Mongo, E-Express, R-React, N-Node in json format

let MERN1 = {
    M : "MongoDB",
    E : "Express",
    R : "React",
    N : "Node"
}









