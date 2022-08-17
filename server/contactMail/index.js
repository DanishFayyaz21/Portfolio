"use strict";
const nodemailer = require("nodemailer");

const mail = async (email, name) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: "clubtesting23@gmail.com", // generated ethereal user
      accessToken: "redtesdpubvcqxlx", // generated ethereal password
    },
  });

  var mailOption = {
    from: "clubtesting23@gmail.com", // sender address
    to: email, // list of receivers
    subject: `Hi! ${name}!`, // Subject line
    text: "ye mera area ha or yahan pr sirf ma login kar skta hun", // plain text body
    html: `<b>Thanks for reaching me out. I'll get back to you soon.</b>
    <br>
    <br>
    <p>kind regards</p>`, // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOption, (err, res) => {
    if (err) console.log(err);
    else console.log(res);
    return true;
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = mail;
