const express = require('express');
const app = express();

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2018 },
  { id: 3, brand: 'Mercedes', model: 'C-Class', year: 2019 },
  { id: 4, brand: 'Honda', model: 'Civic', year: 2021 },
  { id: 5, brand: 'Ford', model: 'Focus', year: 2017 }
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const car = cars.find(c => c.id === id);

  if (!car) {
    return res.status(404).send('car not foud');
  }

  res.json(car);
});


app.listen(3000, () => {
  console.log('Server is running');
});