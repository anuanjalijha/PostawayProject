import express from 'express';
import userRouter from './src/features/user/user.route.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';
import postRouter from './src/features/post/post.route.js';
import commentRouter from './src/features/comment/comment.route.js';
import likeRouter from './src/features/like/like.route.js';
import { ApplicationError } from './src/error-handler/applicationError.js';

//1.create server
const server = express();
server.use(express.json());
server.use(loggerMiddleware);
//2. Default Request Handler
server.get('/', (req, res) => {
    res.send('welcome to Postaway APIs');
});
server.use(
  '/api/posts',
  jwtAuth,
  postRouter
);
server.use(
  '/api/like',
  jwtAuth,
  likeRouter
);
server.use(
  '/api/comment',
  jwtAuth,
  commentRouter
);
server.use('/api/users', userRouter);
//3. specify port
server.listen(3200,()=>{
    console.log("server is running at 3200");
})
// Error handler middleware
server.use((err, req, res, next)=>{
    console.log(err);
    if (err instanceof ApplicationError){
      res.status(err.code).send(err.message);
    }
  
    // server errors.
    res
    .status(500)
    .send(
      'Something went wrong, please try later'
      );
  });

// 4. Middleware to handle 404 requests.
server.use((req, res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:3200/api-docs")
  });
  