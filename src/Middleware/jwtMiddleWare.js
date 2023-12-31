// 1 importing libs
import jwt from 'jsonwebtoken'

const jwtAuth = (req , res , next) =>{
    // creating or reading token
    console.log(req.headers);
    const token = req.headers['authorization'];
    
    // if the token is not present in the header
    if(!token){
        res.status(401).send("unauthorized")
    }
    try {
        // verification
        const payload = jwt.verify(token , "ZzREdmpffn");
        console.log(payload);
    } catch (error) {
        // throw error
        res.status(401).send("unauthorized")
    }
    // call next middlware;
    next();
}   

export default jwtAuth;
