// import libs and functions
import  express  from "express";
import userController from "./user.controller.js";


const userRouter = express.Router();
const userControllers = new userController();

userRouter.post('/signup' , userControllers.signUp);
userRouter.post('/signin' , userControllers.signIn);

export default userRouter;
