import CommentModel from "./comment.model.js";
import PostModel from "../post/post.model.js";
export default class CommentController{
    add(req,res){
       const {content} = req.body;
       const userId = req.userId;
        const post = PostModel.allPosts().find((i)=>{
            return i.userId==userId;
        }) 
        const postId = post.id;
        const comment = {userId,postId,content};
        const createdComment = CommentModel.addComment(comment);
        res.status(201).send(createdComment);

    }
    getAllComment(req, res) {
        const comments = CommentModel.allComments();
        res.status(200).send(comments);
      }
      updateComment(req,res){
        const id = req.params.id;
        const userId = req.userId;
        const post = PostModel.allPosts().find((i)=>{
        return i.userId==userId;
    }) 
    const postId = post.id;
    const comment= CommentModel.updateComment(id, userId,req.body,postId);
        res.status(200).send(comment);
}
deleteComment(req,res){
    const id = req.params.id;
    const userId = req.userId;
    const post = PostModel.allPosts().find((i)=>{
        return i.userId==userId;
    }) 
    const postId = post.id;
    const comment = CommentModel.delete(postId, userId,id);
    res.status(200).send(comment);
  }
}
