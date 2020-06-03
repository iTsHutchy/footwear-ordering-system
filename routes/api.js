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

router.post('/save', (req, res) => {
    console.log(req.body)
    const newOrder = new Orders(req.body);

    newOrder.save((error) => {
        if (error) {
            res.status(500).json({
                msg: 'Error'
            });
            return;
        }
        return res.json({
            msg: 'Saved'
        });
    });
});

module.exports = router;