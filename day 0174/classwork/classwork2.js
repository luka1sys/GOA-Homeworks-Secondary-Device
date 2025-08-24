const express = require('express');
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const  miniMorgan = (req, res, next) =>{
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    next();
}

app.use(miniMorgan);

app.get('/cars', (req, res) => {
    fs.readFile('./cars.json', 'utf8', (err, data) => {
        if (err) {
            return res.end('error');
        }
        const cars = JSON.parse(data);
        res.json(cars);
    });
});
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('server is running on http://localhost:3000');
});