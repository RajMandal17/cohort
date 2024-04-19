const jwt = require("jsonwebtoken");

const value = {
    name : "Raj" ,
    accountNumber: 123123123

}

const token = jwt.sign(value , "secret");
console.log(token);



// npm install jsonwebtoken
// node jwtAuthenthicationtoken.js