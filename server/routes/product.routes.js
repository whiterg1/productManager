const ProductController = require("../controllers/product.controller")

 module.exports = function(app){
     app.post("/api/products", ProductController.createProduct);
 }