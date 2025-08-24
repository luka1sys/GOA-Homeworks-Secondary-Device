const express = require('express')

const app = express();

const router = require('./route/hotel.route');

app.use(express.json());

app.use('/hotels', router)

app.listen(3000,() =>{
    console.log('Server is running on port 3000');
})