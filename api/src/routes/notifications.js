const { Router } = require("express");

const router = Router();

router.post("/notifications", (req, res) => {
  try {
    const notification = req.body;
    console.log(notification)
    res.status(201).json({ msg: "notification" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = router;