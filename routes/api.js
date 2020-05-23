const express = require('express');
const router = express.Router();

const Orders = require('../models/orders');

//API test routes
router.get('/', (req, res) => {

    Orders.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        })
});

module.exports = router;