const express = require('express');
const { gethotels, gethotelsById, addhotels, deletehotels, updateHotel } = require('../controllers/hotels.controller');
const router = express.Router();

router.get('/', gethotels);

router.get('/:id', gethotelsById);

router.post('/', addhotels);

router.delete('/:id',deletehotels);
router.patch('/:id', updateHotel);


module.exports = router;


