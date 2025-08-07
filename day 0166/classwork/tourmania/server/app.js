const http = require('http');
const routes = require('./route/toursrouter')

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    routes(req, res)
});
server.listen(3000, () => {
    console.log('server is runing')
})