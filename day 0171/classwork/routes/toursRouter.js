const express = require('express');

const toursRouter = express.Router();

const tours = [];

toursRouter.get('/', (req, res) => {
    res.json(tours);
});

toursRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const tour = tours.find(elem => elem.id === parseInt(id));

    if(!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        })
    }

    res.json(tour);
});

toursRouter.post('/', (req, res) => {
    const { name, price, duration } = req.body;

    if(!name || !price || !duration) {
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields required: name, price and duration'
        })
    }

    const newTour = {
        name,
        price,
        duration,
        id: Date.now()
    }

    tours.push(newTour);

    res.status(201).json(newTour);
});

toursRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, duration } = req.body;

    const index = tours.findIndex(elem => elem.id === parseInt(id));

    if(index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    // Update only provided fields
    if (name !== undefined) tours[index].name = name;
    if (price !== undefined) tours[index].price = price;
    if (duration !== undefined) tours[index].duration = duration;

    res.json(tours[index]);
})

toursRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const tourIndex = tours.findIndex((tour) => tour.id === parseInt(id));

    if(tourIndex === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour cant be found'
        })
    }

    tours.splice(tourIndex, 1);

    res.status(204).send();
});


module.exports = toursRouter;