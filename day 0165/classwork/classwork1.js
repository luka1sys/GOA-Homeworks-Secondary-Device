const http = require('http');
const fs = require('fs');
const url = require('url');

const cars = JSON.parse(fs.readFileSync('cars.json', 'utf8'));

const server = http.createServer((req, res) => {
    const urlParts = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(urlParts.searchParams.get('id'));

    if(!id) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(cars));
    }

    const car = cars.find(el => el.id === id);

    if(!car) {
        res.writeHead(404);
        return res.end('<h1>Car not found</h1>');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(car));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})