// importing Libs
import express from "express";
import productRouter from "./src/Feature/post/post.Routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/Feature/user/user.Routes.js";
import jwtAuth from "./src/Middleware/jwtMiddleWare.js";


// creating server
const server = express();

// bodyParse
server.use(bodyParser.json());

// setting up post Routwer
server.use('/api/post/' ,jwtAuth , productRouter);
server.use('/api/user/' , userRouter);

// setting default
server.get('/' , (req , res) =>{
    res.send("Welcome to Socials (A Social Networking App)")
})



server.listen(3400 , ()=>{
    console.log("the server is listed to 3400");
})
