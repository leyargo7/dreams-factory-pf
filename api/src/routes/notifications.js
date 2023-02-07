const { Router } = require("express");
const axios = require("axios");
const User = require("../models/User");
const sendMail = require("../services/mailer");

const router = Router();

router.post("/notifications", async (req, res) => {
  try {
    const notification = req.body;
    if (notification.resource) {
      const paymentNotification = await axios.get(notification.resource, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
        //JuanID: "63e066dd408cdc840fd9cb3d"
        //FatimaID:  "63e15ab6647348df79b00d96"
      });
      if (paymentNotification.data.order_status === "paid") {
        const foundID = JSON.parse(
          paymentNotification.data.items[0].category_id
        );
        // console.log("🧞", foundID);
        const userPurchase = await User.findOne({ _id: foundID });
        if (userPurchase._id) {
          ////
          const formated = paymentNotification.data.items.map((p) => {
            const classDate = new Date(paymentNotification.data.date_created);
            const date =
              classDate.getMonth() +
              1 +
              "/" +
              classDate.getDate() +
              "/" +
              classDate.getFullYear();
            const hour =
              classDate.getHours() +
              ":" +
              classDate.getMinutes() +
              ":" +
              classDate.getSeconds();
            return { ...p, date: date, hour: hour };
          });
          await User.updateOne(
            { _id: foundID },
            { $push: { purchases: { $each: [formated] } } }
          );
          console.log("🧞", paymentNotification.data);
          //SEND_MAIL
          const userEmail = userPurchase.email;
          const payment = paymentNotification.data;
          const purchaseID = paymentNotification.data.id;
          const mailBody = `
          <h1 style="">Thanks for you purchase!!</h1>
          <h2>Summary</h2>
          <div>${payment.items.map((p) => {
            return `<div>
              <h2>${p.title}</h2>
               <h3>${p.description}</h3>
               <h4>${p.price}, x${p.quantity}</h4>
               <img style="" src= ${p.picture_url} alt="image not found"/>
            </div>`;
          })} </div>
          `;
          sendMail(userEmail, mailBody, purchaseID);
          ////

          // console.log("🧞 SUCCESSFUL PAYMENT!")
          ///REESTABLECER COMPRAS
          // await User.updateOne({ _id: foundID }, { purchases: [] });
        }
      }
    }
    res.status(200).json({ msg: "notification" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
