const http = require('http');

let cars = [];

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/cars') {
        let body = ''; 
        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
                const car = JSON.parse(body);
                cars.push(car);
                res.end(JSON.stringify(cars))
        });
    } else {
        res.end(JSON.stringify({ message: 'not found' }));
    }
});

server.listen(3000, () => {
    console.log('server is runing');
});
