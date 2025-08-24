const Post = require('../model/post.model');

// GET all posts
const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE post
const createPost = async (req, res) => {
    const { title, author, description } = req.body;

    const newPost = new Post({ title, author, description });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET post by ID
const getById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PATCH post
const postChange = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // დაბრუნებს უკვე განახლებულ ობიექტს
        );
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getPost, createPost, deletePost, getById, postChange };