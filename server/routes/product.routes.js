const ProductController = require("../controllers/product.controller")

 module.exports = function(app){
     app.post("/api/products", ProductController.createProduct);
     app.get("/api/products", ProductController.getAllProducts);
     app.get("/api/products/:id", ProductController.getProductById);
     app.put("/api/products/update/:id", ProductController.updateExistingProduct);
     app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
 }