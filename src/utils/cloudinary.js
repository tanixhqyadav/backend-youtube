import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
    // Basically we need to config  cloudinary  which allows to upolad and manipulate files
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// A method in which we are giving the

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            // with path we are given multiple option while uploading the file 
            resource_type: "auto"// it is for the detection thsat detect which type of file iscomung 
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        // * the file is on server so we should remov it orelse malicious data will come  so e=we are unlinkSync
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}