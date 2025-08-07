const express = require('express');
const fs = require('fs'); 
const app = express();

app.get('/cars', (req, res) => {
  fs.readFile('./cars.json', 'utf8', (err, data) => {
    if (err) {
      return res.end('error');
    }
    const cars = JSON.parse(data); 
    res.json(cars);
  });
});

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});