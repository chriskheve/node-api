// Database connexion with Mongoose
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.mup5h.mongodb.net/user-api",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(!err) console.log("Mongo DB connected")
        else console.log("Connection failed:" + err)
    }
)