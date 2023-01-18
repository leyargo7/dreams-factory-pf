const { Router } = require("express");
//const Product = require("../models/Products");

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/products.controller");


const router = Router();

router.get("/products", getProducts);

router.post("/product", createProduct);

router.get("/product/:id", getProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);




module.exports = router;
