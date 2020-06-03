//NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes/api');

//Dotenv to fetch DB url
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGOLAB_URI;

//Mongoose connection
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Connection logger
mongoose.connection.on('connected', () => {
    console.log('Database connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);
app.listen(PORT, console.log(`App listening at http://localhost:${PORT}`));