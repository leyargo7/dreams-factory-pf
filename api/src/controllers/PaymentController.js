const nodemailer = require('nodemailer')

class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment(req.body);
      const paymentDetails = {items: [...payment.items], ID: payment.id, date: payment.date_created}
      const mailBody = 
      `
      <h1>Thanks for your purchase!</h1>
      <h2>Summary</h2>
      <div>${paymentDetails.items.map((p) => `<h3>${p.title}</h3><br/><img src="${p.picture_url}"/>`)}</div>
      `
      console.log(payment)
      const sendMail = async () => {
        const config = {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "dreamsfactory2113@gmail.com",
            pass: "asoocihmcmczbuyn"
          }
      }
      const message = {
        from: "dreamsfactory2113@gmail.com",
        to: "dreamsfactory2113@gmail.com",
        subject: "Correo de prueba",
        html: mailBody
      }
       const transport = nodemailer.createTransport(config);
       const information = await transport.sendMail(message);
       console.log(information) 
      }
      await sendMail();
      return res.json(payment);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }
}

module.exports = PaymentController;