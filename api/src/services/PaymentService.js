const axios = require("axios");

class PaymentService {
  async createPayment(bodyFront) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    // const body = JSON.stringify(bodyFront);
    
    const body = {
      "payer_email":"test_user_1295402328@testuser.com",
      "items": [
        {
          "title": "Dummy Title",
          "description": "Dummy description",
          "picture_url": "http://www.myapp.com/myimage.jpg",
          "category_id": "cat123",
          "quantity": 1,
          "unit_price": 10
        }
      ],
      "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
      },
      "notification_url": "https://www.your-site.com/ipn"
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    return payment.data;
  }
}

module.exports = PaymentService;