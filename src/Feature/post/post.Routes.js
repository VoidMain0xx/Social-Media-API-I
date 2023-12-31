import exprees from 'express';
import postController from './postController.js';
import { upload } from "../../Middleware/multerMiddleware.js";

const productRouter =  exprees.Router();

// Creating Instance
const postControllers = new postController();

productRouter.get( '/' , postControllers.getAllPost);
productRouter.put('/like' , postControllers.like);
productRouter.put('/comment' , postControllers.coments);
productRouter.post('/:userId' , upload.single('media') , postControllers.createPost);
productRouter.post('/:id' , postControllers.getOnePost)
productRouter.put('/save/:id', postControllers.savePost);
productRouter.get('/saved/' , postControllers.savedPost);
productRouter.delete('/delete/:id', postControllers.delete);


export default productRouter;