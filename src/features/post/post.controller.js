// Create a Post controller to interface with the Post model to retrieve, create, update and delete posts.
import PostModel from "./post.model.js";



export default class PostController {
  getAllPost(req, res) {
    const posts = PostModel.allPosts();
    res.status(200).send(posts);
  }

  addPost(req, res) {
    const { caption } = req.body;
    const userId = req.userId;
    const newPost = {
      userId,
      caption,
      imageUrl: req.file.filename,
    };
    const createdPost = PostModel.add(
      newPost
    );
    res.status(201).send(createdPost);
  }


getUserPost(req,res){
  const userId = req.userId;
  console.log(userId);
  const post = PostModel.userPost(userId);
  res.status(200).send(post);
}
   

  getOnePost(req, res) {
    const id = req.params.id;
    const post = PostModel.get(id);
    console.log(post)
    if (!post) {
      res.status(404).send('Post not found');
    } else {
      return res.status(200).send(post);
    }
  }
updatePost(req,res){
  const id = req.params.id;
  const userId = req.userId;
  const post = PostModel.updatePost(id, userId,req.body);
  res.status(200).send(post);


}
deletePost(req,res){
  const id = req.params.id;
  const userId = req.userId;
  const post = PostModel.delete(id, userId);
  res.status(200).send(post);
}

}
