const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    countInStock: {
        type: Number,
        require: true
    }

})

const product = mongoose.model('product', ProductsSchema);
module.exports = product;
