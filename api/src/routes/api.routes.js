const { Router } = require("express");

const router = Router();

router.get("/api", (req, res) => {
    res.json({ message: "Welcome API DREAMS FACTORY",
            GET: "",
            allProducts: "http://localhost:3001/api/products",
            categories: ["http://localhost:3001/api/category/cases",
                        "http://localhost:3001/api/category/keyboards",
                        "http://localhost:3001/api/category/case_fan",
                        "http://localhost:3001/api/category/power_supply",
                        "http://localhost:3001/api/category/ram",
                        "http://localhost:3001/api/category/cpu_fan",
                        "http://localhost:3001/api/category/mouse",
                        "http://localhost:3001/api/category/gpus",
                        "http://localhost:3001/api/category/motherboard",
                        "http://localhost:3001/api/category/proccessors",
                        "http://localhost:3001/api/category/storages",],
            POST:"",
            createProduct: "http://localhost:3001/api/product",
    });
});



module.exports = router;