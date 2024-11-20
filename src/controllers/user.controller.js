import {asyncHandler} from "../utils/asyncHandler.js"
// asynhandler is kind of a helper method which allows not to repeat the code of promises and try and catch hence we are talling to 
// dba and work done can or could  be asynchronous , it is higher order function which accepts a function 
// This is a higher-order function that wraps asynchronous route handlers to simplify error handling. It allows you to avoid writing 
// repetitive try...catch blocks in every asynchronous route handler.
// The asyncHandler function takes an asynchronous function (like registerUser) as an argument and automatically catches any 
// errors in the function. This helps prevent the need to manually handle try...catch for every async function.
const registerUser=asyncHandler( async (req, res) =>{
    // registerUser function is responsible for handling the request, but in this case, it just sends a response with a success message.
    return res.status(200).json({
        message:"ok"
    })
})

export {registerUser} 