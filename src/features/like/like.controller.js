import LikeModel from "./like.model.js";
export default class LikeController{
    getAll(req,res){
        const postId = req.params.postId;
        const like = LikeModel.allLike(postId);
        res.status(201).send(like);


    }
    toggleLike(req,res){
        const postId = req.params.postId;
        const userId = req.userId;
        const finds = LikeModel.all().find((i)=>{
            return i.postId==postId && i.userId==userId;
        })
        console.log(finds);
        if(finds){
            const item = LikeModel.remove(postId,userId);
            return res.status(201).send(item);

        }
        else{
            const finds = LikeModel.add({postId,userId});
            return res.status(201).send(finds);
        }

    }
}