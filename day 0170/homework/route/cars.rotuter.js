const express = require('express');
const { updateCar, deleteCar, addCar, getCars } = require('../controllers/cars.controller');
const router = express.Router();

router.get('/cars', getCars)

router.post('/cars', express.json(), addCar) 

router.delete('/cars/:id',deleteCar)

router.put('/cars/:id', express.json(), updateCar )                

module.exports = router;