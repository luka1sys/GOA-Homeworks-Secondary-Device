const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();


 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));

}


app.get('/home', (req, res) => {
    res.send('Hello World');
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running `);
}
);
