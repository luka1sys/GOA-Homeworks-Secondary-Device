const express = require('express');

const morgan = require('morgan');

const dotenv = require('dotenv');

const app = express();

const mongoose = require('mongoose');


const postRouter = require('./router/post.router')

dotenv.config();

app.use(express.json())

// პოსტებისთის
app.use('/posts', postRouter)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to mongoDB');

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });


