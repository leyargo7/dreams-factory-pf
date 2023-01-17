const {Router} = require("express");
const router = Router();
const rtPowerSupply = require("./rtPowerSupply");

router.use("/power_supply", rtPowerSupply)

module.exports = router;