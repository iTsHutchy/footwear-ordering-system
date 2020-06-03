const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const OrdersSchema = new Schema({
    productName: String,
    category: String,
    size: String,
    colour: String,
    status: String,
    customerInitials: String
});

//Model
const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;