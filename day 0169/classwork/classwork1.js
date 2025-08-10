const express = require('express');
const app = express();

const tours = [
  { id: 1, name: "anaklia ", price: 140 },
  { id: 2, name: "martvili ", price: 110 },
  { id: 3, name: "achara", price: 200 }
];

app.get('/tours', (req, res) => {
  const { sorted } = req.query;
  
  let end = [...tours];

  if (sorted === 'price a') {
    end.sort((a, b) => a.price - b.price); 
  } else if (sorted === 'price b') {
    end.sort((a, b) => b.price - a.price); 
  }

  res.send(end);
});

app.listen(3000, () => {
  console.log('Server running');
});