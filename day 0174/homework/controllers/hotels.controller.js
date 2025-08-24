const hotels = [
    {
        id: 1,
        name: "Grand Palace Hotel",
        location: "თბილისი, საქართველო",
        stars: 5,
        pricePerNight: 250,
        rooms: 120
    },
    {
        id: 2,
        name: "Sea Breeze Resort",
        location: "ბათუმი, საქართველო",
        stars: 4,
        pricePerNight: 180,
        rooms: 90
    },
    {
        id: 3,
        name: "Mountain View Inn",
        location: "ყაზბეგი, საქართველო",
        stars: 3,
        pricePerNight: 95,
        rooms: 40
    },
    {
        id: 4,
        name: "City Center Hotel",
        location: "ქუთაისი, საქართველო",
        stars: 4,
        pricePerNight: 150,
        rooms: 70
    },
    {
        id: 5,
        name: "Golden Sands Hotel",
        location: "ქობულეთი, საქართველო",
        stars: 5,
        pricePerNight: 220,
        rooms: 110
    }
];
const gethotels = (req, res) => {
    res.json(hotels);
};
const gethotelsById = (req, res) => {
    const hotelsId = parseInt(req.params.id);
    const hotel = hotels.find(c => c.id === hotelsId);
    if (!hotel) {
        return res.status(404).json({ message: 'hotels not foud' });
    };
    res.json(hotel);
}

const addhotels = (req, res) => {
    const { id, name, location, stars, pricePerNight, rooms } = req.body;
    const newhotels = { id, name, location, stars, pricePerNight, rooms };
    hotels.push(newhotels);
    res.status(201).json(newhotels);

};

const deletehotels = (req, res) => {
    const hotelsId = parseInt(req.params.id);
    const hotelsIndex = hotels.findIndex(c => c.id === hotelsId);
    if (hotelsIndex === -1) {
        return res.status(404).json({ message: 'hotels not found' });
    };
    hotels.splice(hotelsIndex, 1);
    res.status(200).json(hotels);
};

const updateHotel = (req, res) => {
    const hotelsId = parseInt(req.params.id);
    const index = hotels.findIndex(c => c.id === hotelsId);

    if (index === -1) return res.status(404).json({ message: 'Hotel not found' });

    // ძველი ობიექტის properties–ის გაერთიანება req.body–სთან
    hotels[index] = { ...hotels[index], ...req.body };

    res.status(200).json(hotels[index]);
};
module.exports = { gethotels, gethotelsById, addhotels, deletehotels, updateHotel };
