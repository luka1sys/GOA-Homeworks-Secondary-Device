const carsSchema = require('../models/cars.model');
const addCar = async (req, res ) =>{
    const {brand, model, year, price} = req.body;

    const newCar = new carsSchema({
        brand,
        model,
        year,
        price
    })
    await newCar.save();
    res.status(201).json(newCar); 
}
const deleteCar = async (req,res) =>{
    const {id} = req.params
    const deletedCar =await carsSchema.findByIdAndDelete(id)
    if (!deletedCar){
        return res.status(404).json('car not found')
    }
    res.status(200).json(deletedCar)
}

const getCars = async (req,res) =>{
    const cars = await carsSchema.find();
    res.status(200).json(cars)
}

const updateCar = async (req, res) => {
    const { id } = req.params;
    const { brand, model, year, price } = req.body;

    const car = await carsSchema.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    if (brand) car.brand = brand;
    if (model) car.model = model;
    if (year) car.year = year;
    if (price) car.price = price;
    const updatedCar = await car.save();

    res.status(200).json(updatedCar);
};


module.exports = {addCar, deleteCar,getCars,updateCar};