const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());


<<<<<<< HEAD
router.get("/payment", function (req, res, next) {
=======
router.post("/payment", function (req, res, next) {
>>>>>>> bb157c42fc71024a49fe62851e45f92703152367
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;