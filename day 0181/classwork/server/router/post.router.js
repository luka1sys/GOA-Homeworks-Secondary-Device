const express = require('express')
const postRouter = express.Router() 
const { createPost,getPosts,deletePost,updatePost,getPostsss } = require('../controllers/post.controller');
postRouter.post('/',createPost);
postRouter.get('/',getPosts)
postRouter.get('/filter',getPostsss)
postRouter.delete('/:id',deletePost)
postRouter.patch('/:id',updatePost)
module.exports = postRouter