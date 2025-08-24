const express = require('express');
const port = 3000;
const app = express();
const toursRouter = require('./routers/tours.router');
app.use(toursRouter);
app.listen(port, () => {
    console.log(`Server is running`);
});