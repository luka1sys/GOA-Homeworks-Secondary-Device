const express = require('express');
const app = express();
router = require('./routers/router');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use('/cars', router);




const Port = process.env.PORT
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`);
        })
    }).catch((err) => {
        console.error('Error', err);
    })







