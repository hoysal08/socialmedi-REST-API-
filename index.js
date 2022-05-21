//node.js framework server will run on express
const express=require("express");
const app=express();
//help with using mongodb
const mongoose=require("mongoose")
//can be used to stored critical info about db etc
const dotenv=require("dotenv")
//addition security 
const helmet = require("helmet")
//info about all the comms btw client and server
const morgan= require("morgan")
//nodemon is used to refresh app after each change in the code
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const PostRoute=require("./routes/post")

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},()=>{
    console.log("Connected to MongoDB")
});

//middleware
app.use(express.json()); 
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",PostRoute)



app.listen(8800,()=>{
    console.log("Backend server is running!!!")
})

//35.42