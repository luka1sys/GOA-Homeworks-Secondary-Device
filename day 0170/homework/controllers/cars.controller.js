

const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2021 }
];

const getCars = (req, res) => {
    res.json(cars);
}
const addCar = (req, res) => {
    const { brand, id, model, year } = req.body;

    if (!brand || !id || !model || !year) {
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields'
        })
    }

    const newcar = {
        id,
        brand,
        model,
        year,
    }

    cars.push(newcar);

    res.status(201).json(newcar);
};

const deleteCar = (req, res) => {
    const carId = parseInt(req.params.id);
    const carindex = cars.findIndex(car => car.id === carId);
    if (carindex === -1) {
        return res.status(404).json({ message: 'Carss not found' });
    }
    const deletedCars = cars.splice(carindex, 1);
    res.status(200).send(deletedCars);
}

const updateCar = (req, res) => {
    const carId = parseInt(req.params.id);
    const carindex = cars.findIndex(car => car.id === carId);
    if (carindex === -1) {
        return res.status(404).json({ message: 'Car not found' });
    }
    const { brand, model, year } = req.body;
    if (!brand || !model || !year) {
        return res.status(400).json({
            message: 'All fields '
        });
    }
    const updatedCar = {
        id: carId,
        brand,
        model,
        year
    };

    cars[carindex] = updatedCar;
    res.status(200).json(updatedCar);
}
module.exports = { getCars, addCar, deleteCar, updateCar };