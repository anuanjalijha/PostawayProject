import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();

const commentController = new CommentController();
commentRouter.post('/',commentController.add);
commentRouter.get('/',commentController.getAllComment);
commentRouter.put('/update/:id',commentController.updateComment);
commentRouter.delete('/delete/:id',commentController.deleteComment);


export default commentRouter;
