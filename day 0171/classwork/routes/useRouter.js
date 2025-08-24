const express = require('express');

const userRouter = express.Router();

const users = [];

// email, password, fullname and id

// Route to register use
userRouter.post('/register', (req, res) => {
    const { email, password, fullname } = req.body;
    const userExsist = users.find(user => user.email === email);

    if(userExsist) {
        return res.status(400).json({
            status: 'Fail',
            message: 'User already exsists!'
        })
    }

    const user = {
        email,
        password,
        fullname,
        id: Date.now()
    }

    users.push(user);

    res.status(201).json(user);
});

// Route to login
userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(obj => obj.email === email && obj.password === password);

    if(!user) {
        return res.status(404).json({
            status: 'Fail',
            message: 'User cant be found or password is incorrect!'
        })
    }

    res.json({
        email: user.email,
        fullname: user.fullname,
        id: user.id
    })
});

// Route to get all users
userRouter.get('/', (req, res) => {
    res.json(users.map(user => ({...user, password: null})));
});

// Route to get user by id
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(obj => obj.id === id * 1);

    if(!user) {
        return res.status(404).json({
            status: 'Fail',
            message: 'User cant be found!'
        })
    }

    res.json({
        email: user.email,
        fullname: user.fullname,
        id: user.id
    })
});


module.exports = userRouter;