const { getTours, getTour, createTour, patchTour, deleteTour } = require("../controllers/tour.Controller");

const router = (req, res) => {
    const { url, method } = req;

    if (url.startsWith("/tours") && method === "GET") {
        return getTours(req, res);
    }

    if (url.startsWith("/tour") && method === "GET") {
        return getTour(req, res);
    }

    if (url.startsWith("/tour") && method === "POST") {
        return createTour(req, res);
    }

    if (url.startsWith("/tour") && method === "PATCH") {
        return patchTour(req, res);
    }

    if (url.startsWith("/tour") && method === "DELETE") {
        return deleteTour(req, res);
    }

    res.writeHead(404);
    res.end("Not Found");
};

module.exports = router;