import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // req fro user as json 
        // file acces you all the files
        // cb is the call back here
      cb(null, "./public/temp")// we are putting all the files in public temp
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})