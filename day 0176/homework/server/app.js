const express = require('express');
const app = express();
const dotenv = require('dotenv');
app.use(express.json());
const mongoose = require('mongoose');
dotenv.config();
const postRouter = require('./router/post.router');
const Port = process.env.PORT
app.use('/posts', postRouter);



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to mongoDB');

        app.listen(Port, () => {
            console.log('Server is running ');
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });
