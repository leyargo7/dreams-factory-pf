const {Router} = require("express");
const router = Router();
const rtPowerSupply = require("./rtPowerSupply");
const rtCaseFan = require("./rtCaseFan");
const rtKeyboard = require("./rtKeyboard");
const rtCases = require("./rtCases");

router.use("/power_supply", rtPowerSupply);
router.use("/case_fan", rtCaseFan);
router.use("/keyboard", rtKeyboard);
router.use("/cases", rtCases);

module.exports = router;