const express = require('express')
const postRouter = express.Router() 
const { createPost,getPosts,deletePost,updatePost,getPost } = require('../controllers/post.controller');
postRouter.post('/',createPost);
postRouter.get('/',getPosts)
postRouter.delete('/:id',deletePost)
postRouter.patch('/:id',updatePost)
postRouter.get('/:id',getPost)
module.exports = postRouter


