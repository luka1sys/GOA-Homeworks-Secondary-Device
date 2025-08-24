const express = require('express');
const postRouter = express.Router();    
const { getPost, createPost,deletePost,getById,postChange } = require('../controllers/post.controller');

postRouter.get('/', getPost);
postRouter.post('/', createPost);
postRouter.delete('/:id', deletePost);
postRouter.get('/:id', getById);    
postRouter.patch('/:id', postChange);
module.exports = postRouter;