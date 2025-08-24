const express = require('express');
const router = express.Router();






const tours = [
  {
    id: 1,
    name: "ყაზბეგის ჰაილაითები",
    location: "სტეფანწმინდა",
    price: 149,
    durationHours: 10,
    startDate: "2025-08-16T08:00:00+04:00",
  },
  {
    id: 2,
    name: "კახეთი – ღვინის დღე",
    location: "თელავი / სიღნაღი",
    price: 99,
    durationHours: 9,
    startDate: "2025-08-17T09:00:00+04:00",
  },
  {
    id: 3,
    name: "სვანეთი – მიუზერი მყინვარი",
    location: "მესტია",
    price: 299,
    durationHours: 48,
    startDate: "2025-09-05T07:00:00+04:00",
  },
  {
    id: 4,
    name: "ბორჯომი–ახალციხე–ვარძია",
    location: "სამცხე-ჯავახეთი",
    price: 129,
    durationHours: 12,
    startDate: "2025-08-18T08:30:00+04:00",
  },
  {
    id: 5,
    name: "ბათუმი – ზღვისპირა დღე",
    location: "აჭარა",
    price: 79,
    durationHours: 8,
    startDate: "2025-08-19T10:00:00+04:00",
  }
];


// Tour consists id, name, price, duration

// Route to get all tours
router.get('/tours', (req, res) => {
    res.json(tours);
});

// Route to get tour by id
router.get('/tours/:id', (req, res) => {
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

// Route to add new tour
router.post('/tours', express.json(), (req, res) => {
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

// Route to update partially tour
router.patch('/tours/:id', express.json(), (req, res) => {
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


module.exports = router;