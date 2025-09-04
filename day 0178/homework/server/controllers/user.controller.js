const User = require('../models/user.model');
const createUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    console.log("Incoming request body:", req.body);

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", newUser });

};
const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "user deleted sucesfully", deleteUser })


}
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { fullName, email, password } = req.body;
    const updatedUser = await User.findById(id)
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    if (fullName) updatedUser.fullName = fullName;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;
    const updatedUser_ = await updatedUser.save();
    res.status(200).json(updatedUser_)
}

// გადასატანია პოსტებზე 

// const formatMongoQuery = (query) => {
//     const mongoQuery = {};

//     for (const [key, value] of Object.entries(query)) {
//         const match = key.match(/^(.+)\[(gte|gt|lte|lt)\]$/);
//         if (match) {
//             const [, field, op] = match;
//             mongoQuery[field] = {
//                 ...mongoQuery[field],
//                 [`$${op}`]: isNaN(value) ? value : Number(value)
//             };
//         } else {
//             mongoQuery[key] = isNaN(value) ? value : Number(value);
//         }
//     }

//     return mongoQuery;
// }

// const getPosts = async (req, res) => {
//     const mongoQuery = formatMongoQuery(req.query);

//     const posts = await Post.find(mongoQuery);

//     res.status(200).json(posts);  
// };

module.exports = { createUser, deleteUser, getUsers,updateUser};