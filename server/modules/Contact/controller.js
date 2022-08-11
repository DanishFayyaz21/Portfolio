const customers = require("./model");
const ContactMail = require("../../contactMail");
const NotifyMail =require("../../notifyMail")
exports.contact = (req, res) => {
  const newContact = new customers(req.body);

  customers.contact(newContact, (err, contactMsg) => {
    if (err) res.send(err);

    ContactMail(newContact.email, newContact.name);
    NotifyMail(newContact);
    console.log("hello");
    res.json({
      error: false,
      message: "your request has been send successfully",
      data: contactMsg,
    });
  });
};
