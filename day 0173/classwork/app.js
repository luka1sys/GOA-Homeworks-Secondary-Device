const express = require('express');
const app = express();

app.post('/test', (req, res) => {
    let body = '';

    req.on('body', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        if (body) {

            const parsed = JSON.parse(body);
            res.json(parsed);

        } else {
            res.json({ message: 'Body is empty' });
        }
    });
});

app.listen(3000, () => {
    console.log(' Server is running ');
});
// express.json() ეს არის middleware რომელიც გამოიყენება იმისთვის,
//  რომ request-ის body-ში JSON მონაცემები წაიკითხოს და ავტომატურად გადააქციოს JavaScript ობიექტად.