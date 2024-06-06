const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
  });
  const mailOptions = {
    from: '"Cahal Agarwalla" <sendersaddress@gmail.com>',
    to: ["recieversaddress@gmail.com","recievrs2address@gmail.com"], // list of receivers
    subject: "Subject of the mail", // Subject line
     // plain text body
    html: "<b>Content of the mail</b>", 
  };



const sendMail = async(transporter,mailOptions)=>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    }catch(error){
        console.log(error);
    }
}
sendMail(transporter,mailOptions);