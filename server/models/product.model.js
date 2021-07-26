const mongoose = require("mongoose");

//This Model Creates a new Product with title, price, and description
const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true})

module.exports.Product =  mongoose.model("Product", ProductSchema);