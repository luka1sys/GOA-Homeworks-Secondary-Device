const { getTours } = require("../controlers/tourscontroller.js");
const routes = (req, res) => {
    const { url, method } = req;
    if (url === '/tours' && method === 'GET') {
        return getTours(req,res)
    }
    res.end('error page not found')
}
module.exports = routes
