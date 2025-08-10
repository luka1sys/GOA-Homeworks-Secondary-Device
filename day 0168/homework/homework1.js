const express = require('express');

const app = express();

const tours = [];


app.get('/tours', (req, res) => {
    res.json(tours);
});

// Route to get tour by id
app.get('/tours/:id', (req, res) => {
    const { id } = req.params;
    const tour = tours.find(elem => elem.id === parseInt(id));

    if (!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        })
    }

    res.json(tour);
});

app.post('/tours', express.json(), (req, res) => {
    const { name, price, duration } = req.body;

    if (!name || !price || !duration) {
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

app.patch('/tours/:id', express.json(), (req, res) => {
    const { id } = req.params;
    const { name, price, duration } = req.body;

    const index = tours.findIndex(elem => elem.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    if (name !== undefined) tours[index].name = name;
    if (price !== undefined) tours[index].price = price;
    if (duration !== undefined) tours[index].duration = duration;

    res.json(tours[index]);
})

app.delete('/tours/:id', (req, res) => {
    const { id } = req.params;

    const index = tours.findIndex(tour => tour.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    tours.splice(index, 1);

    res.status(204).json();
});


app.listen(3000, () => {
    console.log('Server is runing on port 3000');
});



// Middleware — რომელიც მოთხოვნასა (request) და პასუხს (response) შორის მუშაობს.
// ვებ-პროგრამირებაში  middleware არის ფუნქცია, რომელიც იღებს სამ პარამეტრს
// როდესაც მომხმარებელი აგზავნის მოთხოვნას მოთხოვნა ჯერ გადის middleware ფუნქციაზე.
// middleware შეიძლება შეცვალოს req ან res ობიექტები შეასრულოს რაიმე ოპერაცია და აშშ

