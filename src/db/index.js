import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Another approacj to connect to datbase using for more refinemant 
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // ! connectionInstance it is respnonse / object 
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1) // !process termination 
    }
}

export default connectDB