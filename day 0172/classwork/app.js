const express = require('express');

const app = express();

const router = require('./route/postRouter');

app.use(express.json());

app.use('/posts', router);

app.listen(3000, () => {
    console.log('server is runing on pirt 3000')
})