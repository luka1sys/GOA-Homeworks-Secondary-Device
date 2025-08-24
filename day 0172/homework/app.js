const express = require('express')

const app = express();

const router = require('./route/movie.router');

app.use(express.json());

app.use('/movies', router)

app.listen(3000,() =>{
    console.log('Server is running on port 3000');
})