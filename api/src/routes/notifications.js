const { Router } = require("express");
const axios = require("axios");
const User = require("../models/User");

const router = Router();

router.post("/notifications", async (req, res) => {
  try {
    const notification = req.body;
    if (notification.resource) {
      const paymentNotification = await axios.get(notification.resource, {
        headers: {
          "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
        }
      });
      if (paymentNotification.data.order_status === 'paid') {
        const foundID = JSON.parse(paymentNotification.data.items[0].category_id);
        const userPurchase = await User.findOne({ _id: foundID });
        if (userPurchase._id) {
          ////
          const formated = paymentNotification.data.items.map(p => {
            const classDate = new Date(paymentNotification.data.date_created)
            const date = (classDate.getMonth() + 1) + "/" + classDate.getDate() + "/" + classDate.getFullYear();
            const hour = classDate.getHours() + ":" + classDate.getMinutes() + ":" + classDate.getSeconds();
            return { ...p, date: date, hour: hour }
          });
          await User.updateOne({ _id: foundID }, { $push: { purchases: { $each: [formated] } } });
          ////
          console.log("🧞 SUCCESSFUL PAYMENT!")
          ///REESTABLECER COMPRAS
          // await User.updateOne({ _id: foundID }, { purchases: [] });
        }
      }
    }
    res.status(200).json({ msg: "notification" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = router;