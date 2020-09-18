const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must be have a title"],
        minlength: [4, "Title must have at least 4 characters"]
    },
    price: {
        type: Number,
        required: [true, "Must have a price"],
        min: [0, "The price have to be more than zero"]
    },
    description: {
        type: String,
        required: [true, "The product have to be a description"],
        minlength: [4, "Description must have at least 4 characters"]
    }
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;