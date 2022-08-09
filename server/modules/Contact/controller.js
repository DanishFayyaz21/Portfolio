const customers = require("./model");

exports.contact = (req, res) => {
  const newContact = new customers(req.body);

  customers.contact(newContact, (err, contactMsg) => {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "your request has been send successfully",
      data: contactMsg,
    });
  });
};
