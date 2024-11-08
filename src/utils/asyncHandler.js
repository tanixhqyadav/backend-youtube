const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}//! a little bit of complex to its okay
// request handler is a asnchronus function which is handling 
// asynchander is returning a middle ware, and to handle asynchronous errors automatically
// next(err) : next(err) forwards the error to any error-handling middleware

// * another Syntax
//! const asyncHandler= (fn) => async (req,res,next) =>{
//!     try {
// !        await fn(req,res,next)
// !   } catch (error) {
//  !      res.status(err.code || 500).json({
//  !           success:false,
//  !           message:err.message
// !        })//here we are handling error err.code by user what to be set or else set 500 as code which is for Internal server error
//  !   }
// !}// it is a higher order function to understand 
// const asyncHandler=() => {()=> {}}// passing it to another function 


export {asyncHandler}