const http = require('http')
const message = []
const server = http.createServer((req, res) => {
    if (req.url === '/messages' && req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const parsed = JSON.parse(body);
            message.push(parsed);
            console.log('Message saved')
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(message));

        })
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify('error'));
    }

})

server.listen(3000, () => {
    console.log('server is runing ')
})