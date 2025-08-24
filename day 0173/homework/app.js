const express = require('express');
const app = express();
const middleware1 = (req, res, next) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;

    })
    req.on('end', () => {
        if (data) {
            req.body = JSON.parse(data);

        } else {
            req.body = {};
        }
        next();
    });
}

const middleware2 = (req, res, next) => {
    const { email } = req.body;
    if (email === 'Admin@gmail.com') {
        next();
    } else {
        return res.send('You are not allowed to view this content because you are not an Admin');
    }
};

const middleware3 = (req, res) => {
    res.send('Admin has private messages');
}   
app.post('/admin', middleware1, middleware2, middleware3);
app.listen(3000, () => {
    console.log('Server is running');
});
