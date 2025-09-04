
const express = require('express');
const router = express.Router();

const { addCar,deleteCar,getCars,updateCar} = require('../controllers/controller');
router.post('/', addCar);
router.delete('/:id',deleteCar)
router.get('/', getCars)
router.patch('/:id', updateCar)

module.exports = router;