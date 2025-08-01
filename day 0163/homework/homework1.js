const http = require('http');
const fs = require('fs');
const htmlFiles = ['index1.html', 'index2.html', 'index3.html'];

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/random') {
        const randomFile = htmlFiles[Math.floor(Math.random() * htmlFiles.length)];
        fs.readFile(randomFile, 'utf-8', (err, data) => {
            if (err) {
                res.end('Server error');
            } else {
                res.end(data);
            }
        });

    } else {
        res.end('Not Found');
    }

});
server.listen(3000, () => {
    console.log('server is  runing at poort 3000')
})