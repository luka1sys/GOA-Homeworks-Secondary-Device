const http = require("http");
const router = require("./routers/tours.router");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(200);
        return res.end();
    }

    return router(req, res);
});

server.listen(3000, () => {
    console.log("Server is running ");
});