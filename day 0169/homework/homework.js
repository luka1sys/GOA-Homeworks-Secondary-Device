const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
app.get('/shop', (req, res) => {
    const { limit, sorted } = req.query
    fs.readFile('./onlainshop.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json('error broo')


        }
        let products = JSON.parse(data)
        if (sorted === 'price') {
            products.sort((a, b) => a.price - b.price);
        } else if (sorted === '-price') {
            products.sort((a, b) => b.price - a.price);
        }

        if (limit) {
            const numLimit = +limit;
            if (numLimit > 0) {
                let limited = [];
                for (let i = 0; i < numLimit && i < products.length; i++) {
                    limited.push(products[i]);
                }
                products = limited;
            }
        }

        res.json(products)

    })

});

app.post('/shop', (req, res) => {
    fs.readFile('./onlainshop.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json('error broo')
        }
        const products = JSON.parse(data || '[]')
        products.push(req.body)
        fs.writeFile('./onlainshop.json', JSON.stringify(products), () => {
            res.json(req.body)

        })

    })


});

app.delete('/shop/:id', (req, res) => {
    const id = Number(req.params.id)
    fs.readFile('./onlainshop.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json('error broo')
        }
        let products = JSON.parse(data || '[]')
        const index = products.findIndex(p => p.id === id)
        if (index === -1) {
            res.status(404).json('product not found')
        }
        const deletedProducts = products.splice(index, 1)
        fs.writeFile('./onlainshop.json', JSON.stringify(products), () => {
            res.json(deletedProducts)

        })
    })
})

app.patch('/shop/:id', (req, res) => {
    const id = Number(req.params.id);
    const updates = req.body; 

    fs.readFile('./onlainshop.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json('error broo')
        };
        let products = JSON.parse(data || '[]');
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            return res.status(404).json('product not found')
        }


        products[index] = { ...products[index], ...updates };

        fs.writeFile('./onlainshop.json', JSON.stringify(products, null, 2), () => {
            res.json(products[index]);
        });
    });
});

app.listen(3000, () => {
    console.log('server is runing')
})