const http = require('http');
const fs = require('fs');
const homeHtml = fs.readFileSync('./index.html', 'utf-8')


const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.end(homeHtml)

    } else {
        res.end('<h1>404 Not Found</h1>')
    }

})
server.listen(3000, () => {
    console.log('server is runing at port 3000')
})