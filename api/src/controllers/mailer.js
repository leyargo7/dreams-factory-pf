// const {mailBody} = require('./PaymentController');
// const nodemailer = require('nodemailer')

// sendMail = async () => {
//   const config = {
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "pabletefatima9@gmail.com",
//       pass: "iluzunbuiregkyam"
//     }
// }
// const message = {
//   from: "pabletefatima9@gmail.com",
//   to: "zoranbow@gmail.com",
//   subject: "Correo de prueba",
//   html: mailBody
// }
//  const transport = nodemailer.createTransport(config);
//  const information = await transport.sendMail(message);
//  console.log(information) 
// }
// sendMail();



// const nodemailer = require('nodemailer');

// sendMail = async () =>{
//  const config ={
//     host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//         user: 'pabletefatima9@gmail.com',
//         pass: 'gbrzmvfbwamirkqz'
//     }
//  }

//  const message = {
//     //desde donde lo enviamos
//     from :'pabletefatima9@gmail.com',
//     //hacia donde lo quiero enviar
//     to:'zoranbow@gmail.com',
//     subject: 'correo de prueba!',
//     //especificamos el texto
//     text: 'hola como andas, esta es una prueba  desde node js utilzando nodemailer'
//  }

//  const transport = nodemailer.createTransport(config);
//  const information = await transport.sendMail(message);

//  console.log(information)
// }
// sendMail();
