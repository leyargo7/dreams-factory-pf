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
          ////////////////////////////////////////////////////////////////////////
          // const formated = paymentNotification.data.items.map((p) => {
          //   const classDate = new Date(paymentNotification.data.date_created);
          //   const date =
          //     classDate.getMonth() +
          //     1 +
          //     "/" +
          //     classDate.getDate() +
          //     "/" +
          //     classDate.getFullYear();
          //   const hour =
          //     classDate.getHours() +
          //     ":" +
          //     classDate.getMinutes() +
          //     ":" +
          //     classDate.getSeconds();
          //   return { ...p, date: date, hour: hour };
          // });
          // await User.updateOne(
          //   { _id: foundID },
          //   { $push: { purchases: { $each: [formated] } } }
          // );
          ///////////////////////////////////////////////////////////////////////////
          console.log("🧞", paymentNotification.data);
          //SEND_MAIL
          const userEmail = userPurchase.email;
          const payment = paymentNotification.data;
          const purchaseID = paymentNotification.data.id;
          const mailBody = `<div style="background-color:black; border-radius:20px; padding:50px; text-align:center;">
          <img src="https://res.cloudinary.com/dkc8xrlg8/image/upload/v1675827667/logo2_kbg2l1.jpg" alt=":C" style="width:100%; max-width: 100px; height:auto; "/>
          <h1 style="font-weight:bold; color:white">Thanks for you purchase!!</h1>
          <h2 style="font-weight:bold; color:white">Summary</h2>
          <div>${payment.items.map((p) => {
            return `<div style="background-color:rgba(108,34,177,0.3); width:70vw; padding:30px; border-radius:10px; text-align:end; display:flex; justify-content: space-between;">
            <img style="width:100%; max-width:200px; height:auto; " src= ${p.picture_url} alt="image not found"/>
            <div><h2 style="color:white;">${p.title}</h2>
            <h2 style="color:white;">$${p.unit_price} x${p.quantity}</h2></div></div>`;
          })} </div>
          <h1 style="color:white;">Total: $${Math.floor(payment.items.reduce((acc, e) => {
            return acc + (e.unit_price * e.quantity);
          },0))}</h1>
          </div>
          `;  
          sendMail(userEmail, mailBody, purchaseID);
          ////

          // console.log("🧞 SUCCESSFUL PAYMENT!")
          ///REESTABLECER COMPRAS
          await User.updateOne({ _id: foundID }, { purchases: [] });
        }
      }
    }
    res.status(200).json({ msg: "notification" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
