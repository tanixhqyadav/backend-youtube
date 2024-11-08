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


// !Cookie parse kaam hai jo server se user ka browser hai usme cookie ko acess bhi kr paye or set bhi kr paye  basically can 
//! perform CRUD opertaion 
export {app}