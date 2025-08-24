const express = require('express');
const app = express();
const port = 3000;
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

app.get('/tours/:id', (req, res) => {
    const {id}=req.params
    const  tour = tours.find(c => c.id === parseInt(id)) ;
    if (!tour) {
        return res.status(404).send({status:'error', message:'Tour not found'});
    }
    res.json(tour);

})

    app.listen(port, () => {
    console.log(`Server is running `);
})