import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// ! these are confriguations
app.use(express.json({limit:"16kb"}))// handling json file 
app.use(express.urlencoded({extended:true, limit:"16kb"}))// extended object is for providing objects inside objects 
app.use(express.static("public"))// these are public assets to keep them in our system , assests such as files, images 
app.use(cookieParser())


// Routes
import userRouter from "./routes/user.routes.js"
// routes decalration 
// !app.get() but using app.use() using middle ware for writing routes
app.use("/users",userRouter)// ! now if any user writes or else clcik / user the it will go to userRouter then it will be handled by uer router 
// !  http://localhost:8000/users/register / user ke baad control pass hoga phir jo bhi method likh ho /users ke liye 
// * for more better practise we uses /api/v1/user


// !Cookie parse kaam hai jo server se user ka browser hai usme cookie ko acess bhi kr paye or set bhi kr paye  basically can 
//! perform CRUD opertaion 
export {app}