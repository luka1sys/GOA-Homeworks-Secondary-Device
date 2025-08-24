const express = require('express');
const morgan = require('morgan');

const app = express();
app.use((req, res, next) => {
    console.log('Method:', req.method);
    next(); // გადავცეთ კონტროლი შემდეგ middleware-ს ან route-ს
});

app.get('/home', (req, res) => {
    res.send('Home page');
});

app.post('/submit', (req, res) => {
    res.send('submitted');
});

app.listen(3000, () => {
    console.log('Server is running');
});