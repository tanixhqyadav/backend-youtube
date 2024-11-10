import mongoose, { Schema }  from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true// doing index taki yh databse ki searching mein ane lg jaye
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            // ! Password should be kept in enrypted manner 
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
);
// *a pre-hook is a type of middleware that allows you to run specific functions before certain actions, 
// *such as saving, updating, or deleting documents in a collection
    userSchema.pre("save", async function (next) {
        if(!this.isModified("password")) return next();//! this comdtion is there tha to run only when there is change is 
        // !password field
        // these function set to be async beacuse they are timeconsumig 
        this.password = await bcrypt.hash(this.password, 10)
        next()
    })


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
// !userSchema.methods allows to make multiple method, a method is isPasswordCorrect 
// * comapre check the password and ecryptred password nad return a true and false

// !JWTs have three parts: Header, Payload, and Signature. The payload contains the user claims, while the 
// !signature verifies the token’s authenticity.
// !Access Token: Short-lived, used for authorization in the current session.
// !Refresh Token: Long-lived, used for session management and obtaining new access tokens when the old ones expire.
// through .methods we have created two methods generateAccessToken and generateRefreshToken

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
            // providng payload 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET, 
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User=mongoose.model("User",userSchema);