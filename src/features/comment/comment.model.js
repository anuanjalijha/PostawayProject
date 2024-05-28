import { ApplicationError } from "../../error-handler/applicationError.js";
export default class CommentModel{
    constructor(id,userId,postId,content){
        this.id = id;
        this.userId=userId;
        this.postId=postId;
        this.content = content;

    }
    static addComment(post){
        post.id = comments.length+1;
        comments.push(post);
        return comments;
    }
    static allComments(){
        return comments;
      }
      static updateComment(id,userId,post,postId){
        const index = comments.findIndex((i) => i.id == id && i.userId==userId && postId==postId);
        if (index==-1){
          throw new ApplicationError("the comment for specific post is not found",404);
        }
        else{
        comments[index] = post;
        return comments[index];
        }
      }
      static delete(postId, userId,id){
        const postIndex = comments.findIndex(
            (i)=> i.id == id && i.postId==postId && i.userId == userId);
            if(postIndex == -1){
                throw new ApplicationError("Comment not found",404);
            } else {
                return comments.splice(postIndex, 1);
            }
    }

}
var comments = [{id:1,userId:1,postId:1,content:"comment for post1"},{id:2,userId:2,postId:2,content:"comment for post2"}];
