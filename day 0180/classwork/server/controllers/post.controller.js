const post = require('../models/post.model')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const createPost = catchAsync (async (req, res,) => {
    const { title, author, discription, likesCount } = req.body;
    const newPost = await post.create({
        title,
        author,
        discription,
        likesCount
    });
    res.status(201).json(newPost)
})


const getPosts = catchAsync(async (req, res) => {
    const posts = await post.find();
    res.status(200).json(posts)
})
const getPost = catchAsync(async (req,res,next)=>{
    const {id} = req.params
    const getbyid = await post.findById(id);
    if (!getbyid){
        return next(new AppError('post not found',404))
    }
    res.json(getbyid)
})

const deletePost = catchAsync(async (req, res) => {
    const { id } = req.params;
    const deletedPost = await post.findOneAndDelete(id);
    if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(deletedPost)

})
const updatePost =catchAsync (async (req, res) => {
    const { id } = req.params
    const updatedPost = await post.findByIdAndUpdate(id, req.body);
    if (!updatedPost) {
        return res.status(404).json({message:'post not found'})
    }
    res.status(200).json(updatedPost)
})
module.exports = { createPost, getPosts, deletePost, updatePost,getPost }