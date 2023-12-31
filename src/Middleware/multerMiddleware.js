// import multer 
import multer from "multer";

// config Storage and file name
const storage = multer.diskStorage({
    destination: (req , file , cb) =>{
        cb(null , './uploads');
    },
    filename : (req , file , cb) =>{
        cb(null , new Date().toISOString + file.originalname)
    }
})

//export    
export const upload = multer({
    storage : storage
})