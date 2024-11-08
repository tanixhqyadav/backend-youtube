// * require('dotenv').config({path: './env'}) iska improved versio hai 

import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
// ! improved version
dotenv.config({
    path: './.env'
})
// ! in dev we are also changing to "nodemon -r dotenv/config --experimental-json-modules src/index.js" sue to these new 
// ! funcanalities of .config is still not avaialbe in express
connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })

// ! for immediate function invoke we use the concept of ify in js ()() and ; this semicolon is for cleaning purpose
// *database ke liye 2 things to keep in mind
// *1> its imp to keep things in try and catch or else promises when ever talking with database
// *2> database is always in another continent so use which require time and for this we should use asynac and  await  
// ! we also do one more thing that we have handleld dtabase connections using tru and cactch for error and for async bhevaour used 
// ! async and await what is the express is not working so for this 
/*import express from "express";
const app= express()
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)// database connection 
        app.on("error", (error)=>{
            console.log("Eroor",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ,${process.env.PORT}`);
        })
    }
    catch (error){
        console.log("Error: ",error);
    }
})() */