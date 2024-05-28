import { ApplicationError } from "../../error-handler/applicationError.js";
export default class LikeModel{
    constructor(id,postId,userId){
        this.id = id;
        this.postId = postId;
        this.userId = userId;
    }
    static add(post){
        post.id = likes.length+1;
        likes.push(post);
        return likes;

    }
    static remove(postId,userID){
        let index = likes.findIndex((like) => like.postId == postId && like.userId==userID);
        return likes.splice(index, 1);

    }
    static allLike(postId){
        const like = likes.filter((i)=>{
            return i.postId == postId;
        })
        return like;

    }
    static all(){
        return likes
    }
}
var likes = [{id:1,postId:2,userId:1},{id:2,postId:2,userId:2},{
    postId: 3,
    userId: 3,
    id: 3
}]