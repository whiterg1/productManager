const {Product} = require("../models/product.model");


//Create
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json({newProduct: product}))
    .catch(err => response.json(err));
}
//Find All
module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err=> response.json(err));
}
//Find One
module.exports.getProductById = (request, response) => {
    Product.findOne({_id: request.params.id})
    .then(singleProduct => response.json({oneProduct: singleProduct}))
    .catch(err=>console.log(err));
}
//Update
module.exports.updateExistingProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id},
    request.body,
    {new:true, runValidators: true}
    )
    .then(updatedProduct => response.json({product: updatedProduct}))
    .catch(err=> response.json({message: "Something went wrong", error: err}))
}
//Delete
module.exports.deleteAnExistingProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: 'Something went wrong', error: err }));

}