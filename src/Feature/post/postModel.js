import userModel from "../user/user.Model.js";
export default class postModel {
  constructor(id, userId, caption, media) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.media = media;
    this.likes = [];
    this.comments = [];
    this.save = false;
    this.archive = false;
  }

  static getAllPosts() {
    return Posts;
  }

  static AddToFeed(newpost){
    newpost.id = Posts.length + 1;
    Posts.push(newpost)
    return newpost;
  }

  static findByID(id){
    const PostFound = Posts.find((i)=> i.id == id);
    return PostFound;
  }

  static save (id ){
   const postToSave = Posts.find((i)=> i.id == id);
   if(postToSave){
    postToSave.save = true;
    return postToSave
   }else{
    console.log("can not find the post ")
   }
  }

  static savedPost(save){
    const savedPost = Posts.filter((post) =>{
      return  post.save == true
    });
    return savedPost;
  }

  // static likePost(userId , postId ){
  //   // 1.validate userId 
  //   const user = userModel.getAll().find((p) => p.id == userId);
  //   if(!user){
  //     return 'User Not Found'
  //   }

  //   // 2.validate Post
  //   const post = Posts.find((p)=> p.id == postId);
  //   if(!post){
  //     return 'Post Not Found';
  //   }

  //   // 3.Check if there are any likes or not
  //   if(!Posts.likes){
  //     Posts.likes = []
  //     Posts.likes.push({
  //       userId : userId,
  //       like : Posts.likes.length + 1
  //     });
  //   }else{
  //     // 4. check if user like already exists
  //     const userLikesAlreadyExist = Posts.likes.findIndex((l) => l.userId == userId);
  //     if(userLikesAlreadyExist >= 0) {
  //       Posts.likes[userLikesAlreadyExist] ={
  //       userId : userId,
  //       like : Posts.likes.length + 1
  //       }
  //     }else{
  //       Posts.likes.push({
  //         userId : userId,
  //         like : Posts.likes.length + 1
  //       });
  //     }
  //   }
  // }


  // static toggleLike(userId){
  //   const isLiked = this.likes.some(like => like.userId == userId);

  //   if(!isLiked){
  //     this.likes = this.likes.filter(like => like.userId !== userId);
  //   }else{
  //     this.likes.push({userId});
  //   }

  //   return isLiked;
  // }

  static togglelike(userId , postId){
    const postid = postModel.findByID(postId);

    if(!postId){
      return {  Error: "Post Not Found"}
    }

    const isLiked = postid.likes.some(like => like.userId === userId);

    if(isLiked){
      postid.likes = postid.likes.filter(like => like.userId !== userId);
    }else{
      postid.likes.push(userId )
    }
    return isLiked;
  }

  static comments (PostId , comments){
    const postid = postModel.findByID(PostId);

    if (!postid) {
      return 'post Not Found';
    }else{
      postid.comments.push(comments)
    }
  }

  static delete(id){
    const postid = postModel.findByID(id);
    const postIndex = Posts.findIndex(i => i.id === id);


    if(!postIndex == -1){
      return 'post does not Exit'
    }else{
      const deleteId = Posts.splice(postid , 1);
      return { message: 'Post deleted successfully', deleteId };
    }
  }

}

var Posts = [
  new postModel(1, 123544, "Image1", "Media 1" ),
  new postModel(2, 551351, "caption 2", "media 3"),
];
