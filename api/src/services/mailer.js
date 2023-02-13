const nodemailer = require('nodemailer');

sendMail = async (userEmail, mailBody, purchaseID) =>{
 try {
      const config = {
         host: "smtp.gmail.com",
         port: 587,
         auth: {
            user: 'dreamsFactory2113@gmail.com',
            pass: 'asoocihmcmczbuyn'
         }
      }

      const message = {

         from: 'dreamsFactory2113@gmail.com',

         to: userEmail,
         subject: `Purchase order from Dreams Factory No. ${purchaseID}`,

         html: mailBody,
      }

      const transport = nodemailer.createTransport(config);
      const information = await transport.sendMail(message);

      console.log(information)
   } catch (error) {
      console.log(error.message)
   }
}

module.exports = sendMail;
