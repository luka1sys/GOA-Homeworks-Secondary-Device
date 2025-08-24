const express = require('express');
const postRouter = express.Router();    

postRouter.post('/createPost', (req, res) => {
    const { title, content, } = req.body;

    const newPost = {title, content, likesCount:0};
    res.status(201).json(newPost);
});
module.exports = postRouter;