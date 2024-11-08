class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400
    }
}
// ! this class is used for handling api  reponse 
// * example
// Creating an instance (object) of ApiResponse
// *const response = new ApiResponse(200, { name: "Stripe" }, "Request successful");

// *This 'response' is an object with the following structure:
// *console.log(response);
// *Output:
// {
//   *statusCode: 200,
//   *data: { name: "Stripe" },
//   *message: "Request successful",
//   *success: true
// }

export { ApiResponse }