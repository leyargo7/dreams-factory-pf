const { Router } = require("express");

const {
    getCategoryCases,
    getCategoryKeyboard,
    getCategoryCaseFan,
    getCategoryPowerSupply,
    getCategoryRam,
    getCategoryCpuFan,
    getCategoryMouse,
    getCategoryGpus,
    getCategoryMotherboard,
    getCategoryProccessors,
    getCategoryStorages,
  
} = require("../controllers/categories.controller");


const router = Router();

router.get("/category/cases", getCategoryCases);
router.get("/category/keyboards", getCategoryKeyboard);
router.get("/category/case_fan", getCategoryCaseFan);
router.get("/category/power_supply", getCategoryPowerSupply);
router.get("/category/ram", getCategoryRam);
router.get("/category/cpu_fan", getCategoryCpuFan);
router.get("/category/mouse", getCategoryMouse);
router.get("/category/gpus", getCategoryGpus);
router.get("/category/motherboard", getCategoryMotherboard);
router.get("/category/proccessors", getCategoryProccessors);
router.get("/category/storages", getCategoryStorages);




module.exports = router;