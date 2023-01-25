const { Router } = require("express");

const router = Router();

router.get("/api", (req, res) => {
    res.json({ message: "Welcome API DREAMS FACTORY",
            GET: "",
            allProducts: "https://dreams-factory-pf-production.up.railway.app/api/products",
            categories: ["https://dreams-factory-pf-production.up.railway.app/api/category/cases",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/keyboards",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/case_fan",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/power_supply",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/ram",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/cpu_fan",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/mouse",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/gpus",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/motherboard",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/proccessors",
                        "https://dreams-factory-pf-production.up.railway.app/api/category/storages",],
            POST:"",
            createProduct: "https://dreams-factory-pf-production.up.railway.app/api/product",
    });
});



module.exports = router;