const express = require('express');
const { createUser, deleteUser, getUsers, updateUser} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser)
userRouter.get('/', getUsers)
userRouter.patch('/:id', updateUser)
module.exports = userRouter;