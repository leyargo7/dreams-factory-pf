const { Router } = require("express");
const Product = require("../models/Products");
const mongoose = require("mongoose");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/products.controller");


const router = Router();

router.get("/products", getProducts);

router.get("/products/cases", async(req, res) => {
  const products = await Product.find({category: "cases"});
  res.json(products);

});

router.post("/products", createProduct);

router.get("/products/:id", getProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);




module.exports = router;
