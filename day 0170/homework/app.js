const express = require('express');
const carsRouter = require('./route/cars.rotuter');
const app = express();
app.use(carsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});