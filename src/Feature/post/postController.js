import postModel from './postModel.js'
import userModel from '../user/user.Model.js';
export default class postController {

   getAllPost(req, res) {
      const post = postModel.getAllPosts();
      res.status(200).send(post)

   }

   createPost(req, res) {
      console.log(req.body);
      const id = req.params;
      const {userId ,caption}  = req.body;
      const media = req.file.filename;
      const newPost = new postModel(id , userId , caption , media); 
      const uploadedPost = postModel.AddToFeed(newPost);
      console.log(uploadedPost);
      res.status(201).send(uploadedPost);
   }

   getOnePost(req , res){
      const id = req.params.id;
      const post = postModel.findByID(id);
      if (!post) {
         res.status(404).send("post Not Found")
      }
      res.status(200).send(post);
   }

   savePost(req , res){
      const id = req.params.id;
      console.log(id)
      const result = postModel.save(id);
      if(!result){
         res.status(404).send("ID Not Found")
      }else{
      res.status(200).send(result);
      }
   }

   savedPost(req , res ){
      const save = req.query.save;
      const result = postModel.savedPost(save);
      res.status(201).send(result);
   }

   // likes(req , res){
   //    const userId = req.query.userId;
   //    const postId = req.query.postId;
   //    const error = postModel.likePost(userId ,postId);
   //    if(error){
   //       res.status(401).send(error);
   //    }else{
   //       const post = postModel.findByID(postId)
   //       res.status(200).send("You Like Post ID" + " " +  postId);
   //    }
   // }

   like(req , res){
      const userId = req.query.userId;
      const postId = req.query.userId;

      const result = postModel.togglelike(userId, postId);
     
      if(result.Error){
         res.send(401).send("invalid Request")
      }
      else{
         res.status(201).send(result);
      }
   }

  coments(req , res){
   const PostId = req.query.PostId;
   const comments = req.body;
   postModel.comments(PostId , comments);
   const PostModelId = postModel.findByID(PostId);
   console.log(PostModelId)
   if(!PostModelId){
      res.status(401).send("invalid Request")
   }else{
      res.status(201).send("Your comment is been added to " + PostId );
   }
  }

  delete(req,  res){
   const {postId} = req.params.id;
   const result = postModel.delete(postId)
   if (result.error) {
      return res.status(404).json({ error: result.error });
    }
  
    res.status(200).json(result);
  }

 
}