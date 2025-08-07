const url = require("url");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/tours.json");

const readFile = () => {
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
};

const writeFile = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

const getTours = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(readFile()));
};

const getTour = (req, res) => {
    const { query } = url.parse(req.url, true);
    const tourId = parseInt(query.id);
    const tours = readFile();
    const tour = tours.find((t) => t.id === tourId);

    if (!tour) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Tour not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(tour));
};

const createTour = (req, res) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {
        const newTour = JSON.parse(body);
        const tours = readFile();
        const newId = tours.length > 0 ? tours[tours.length - 1].id + 1 : 1;
        const fullTour = { id: newId, ...newTour };
        tours.push(fullTour);
        writeFile(tours);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(fullTour));
    });
};

const patchTour = (req, res) => {
    const { query } = url.parse(req.url, true);
    const tourId = parseInt(query.id);
    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {
        const updateData = JSON.parse(body);
        const tours = readFile();
        const index = tours.findIndex((t) => t.id === tourId);

        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "Tour not found" }));
        }

        tours[index] = { ...tours[index], ...updateData };
        writeFile(tours);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(tours[index]));
    });
};

const deleteTour = (req, res) => {
    const { query } = url.parse(req.url, true);
    const tourId = parseInt(query.id);
    let tours = readFile();
    const initialLength = tours.length;

    tours = tours.filter((t) => t.id !== tourId);

    if (tours.length === initialLength) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Tour not found" }));
    }

    writeFile(tours);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Tour deleted successfully" }));
};

module.exports = {
    getTours,
    getTour,
    createTour,
    patchTour,
    deleteTour,
};