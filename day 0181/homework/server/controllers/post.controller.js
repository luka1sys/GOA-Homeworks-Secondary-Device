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
    const posts = await post.find();
    res.status(200).json(posts)
}
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



const formatMongoQuery = (query) => {
    const mongoQuery = {};

    for (const [key, value] of Object.entries(query)) {
        const match = key.match(/^(.+)\[(gte|gt|lte|lt)\]$/);
        if (match) {
            const [, field, op] = match;
            mongoQuery[field] = {
                ...mongoQuery[field],
                [`$${op}`]: isNaN(value) ? value : Number(value)
            };
        } else {
            mongoQuery[key] = isNaN(value) ? value : Number(value);
        }
    }
    console.log("req.query:", query);
    console.log("mongoQuery:", mongoQuery);
    return mongoQuery;
}

const getPostsss = async (req, res) => {
    const mongoQuery = formatMongoQuery(req.query);
    let projection = {};
    if (req.query.limitFields) {
        const fieldsToExclude = req.query.limitFields.split(',');
        fieldsToExclude.forEach(field => {
            projection[field] = 0; 
        });
    }

    const posts = await post.find(mongoQuery, projection);

    res.status(200).json(posts);
};
module.exports = { createPost, getPosts, deletePost, updatePost, getPostsss }