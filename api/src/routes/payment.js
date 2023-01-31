const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());


<<<<<<< HEAD
router.get("/payment", function (req, res, next) {
=======
router.post("/payment", function (req, res, next) {
>>>>>>> 8a98451f5ea2f40cf943955d39addfda3d74d623
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;