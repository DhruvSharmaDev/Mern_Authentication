import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config()
// never use special characcter in the password
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDb connected")
}).catch((err)=>{
    console.log(err.message);

})

const app=express();
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api/Auth",authRoutes)
app.listen(3000,()=>{
    console.log("Server is listening at the port number 3000")
})