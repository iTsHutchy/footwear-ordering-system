const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const OrdersSchema = new Schema({
    _id: Number,
    Product_name: String,
    Category: String,
    Size: String,
    Colour: String,
    Status: String,
    Customers_Initials: String
});

//Model
const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;