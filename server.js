//NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

//HTTP request logger
app.use(morgan('tiny'));

//API test routes
app.get('/api', (req, res) => {
    const data = {
        id: 1,
        shoes: 'nike'
    };
    res.json(data);
});

app.get('/api/shoes', (req, res) => {
    const data = {
        id: 1,
        shoes: 'adidas'
    };
    res.json(data);
});

app.listen(PORT, console.log(`App listening at http://localhost:${PORT}`));