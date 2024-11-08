class ApiError extends Error{
    // we are making a contrutur which will provide deafault there things who so evwer in using it for handling error  
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],// for mutiple error,
        stack=""// error stack
    ){
        //  for override we has super keyword 
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false 
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
// ! example Usage // Throwing a custom API error 
// *:throw new ApiError(404, "Resource not found", [], "Custom stack trace if needed");
export {ApiError}