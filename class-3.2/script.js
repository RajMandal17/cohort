 const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/user_apps");

 const User = mongoose.model("Users" , {name:String , email : String, password: String });
 
 const user = new User ({
    name: 'rajmandal' ,
    email: 'Rajmandal147@gmail.com' , 
    password : '123456'
 });

 user.save();


 //install mongo in project==> npm install mongoose