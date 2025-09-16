const post = require('../models/post.model')
const createPost = async (req, res,) => {
    const { title, author, discription, likesCount } = req.body;
    const newPost = await post.create({
        title,
        author,
        discription,
        likesCount
    });
    res.status(201).json(newPost)
}
const getPosts = async (req, res) => {
        let filter = {};
        if (req.query.tags) {
            const tagsArr = req.query.tags.split(',');
            filter.tags = { $all: tagsArr };
        }
        const posts = await post.find(filter);
        res.status(200).json(posts);
        
};
const deletePost = async (req, res) => {
    const { id } = req.params;
    const deletedPost = await post.findOneAndDelete(id);
    if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(deletedPost)

}
const updatePost = async (req, res) => {
    const { id } = req.params
    const updatedPost = await post.findByIdAndUpdate(id, req.body);
    if (!updatedPost) {
        return res.status(404).json({ message: 'post not found' })
    }
    res.status(200).json(updatedPost)
}
module.exports = { createPost, getPosts, deletePost, updatePost }