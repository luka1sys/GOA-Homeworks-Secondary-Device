// External modules
const express = require('express');

// Routers
const toursRouter = require('./routers/tours.router.js');
const userRouter = require('./routers/user.router.js');

const app = express();

app.use(express.json());

app.use('/tours', toursRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
});