// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import PostController from './post.controller.js';
import { upload } from '../../middleware/fileupload.middleware.js';

// 2. Initialize Express router.
const postRouter = express.Router();

const postController = new PostController();


// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1

postRouter.get(
  '/',
  postController.getAllPost
);
postRouter.post(
  '/',
  upload.single('imageUrl'),
  postController.addPost
);
postRouter.get(
  '/:id',
  postController.getOnePost
);
postRouter.get('/specific/user',postController.getUserPost);
postRouter.put('/update/:id',postController.updatePost);
postRouter.delete('/delete/:id',postController.deletePost);

export default postRouter;
