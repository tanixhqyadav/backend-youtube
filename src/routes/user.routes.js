import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"
// Router configureation importing it and exporting it 
const router =Router()

// * when we come here then 
router.route("/register").post(registerUser)//! post sends the data to the user
// how url are build 
// !  http://localhost:8000/users/register

export default router