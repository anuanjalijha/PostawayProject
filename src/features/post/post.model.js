import { ApplicationError } from "../../error-handler/applicationError.js";
// Create a Post model with functions for creating a new post, retrieving all posts, retrieving user posts, getting a post by its id, updating a post and deleting a post
export default class PostModel {
    constructor(id, userId, caption,imageUrl) {
      this.id = id;
      this.userId = userId;
      this.caption = caption;
      this.imageUrl = imageUrl;
    }
    static add(post){
      post.id = posts.length+1;
      posts.push(post);
      return post;

    }
    static allPosts(){
      return posts;
    }
    static get(id) {
      const post = posts.find(
        (i) => i.id == id
      );
      return post;
    }
    static userPost(userId){
      const findUser = posts.find((i)=>i.userId==userId);
      if(findUser){
      const user =  posts.filter((i) => i.userId == userId);
      return user;
      }
      
      else{
        throw new ApplicationError("Your post is empty",404);
      }
    }
    static updatePost(id,userId,post){
      const index = posts.findIndex((i) => i.id == id && i.userId==userId );
      if (index==-1){
        throw new ApplicationError("the specific post is not found",404);
      }
      else{
      posts[index] = post;
      return posts[index];
      }
    }
    static delete(postId, userId){
      const postIndex = posts.findIndex(
          (i)=> i.id == postId && i.userId == userId);
          if(postIndex == -1){
              throw new ApplicationError("Item not found",404);
          } else {
              return posts.splice(postIndex, 1);
          }
  }

}
var posts = [{
  id: 1,
  userId:1,
  caption:"caption for post1",
  imageUrl:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
},{id: 2,
  userId:1,
  caption:"caption for post2",
  imageUrl:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
}]
