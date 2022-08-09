const mongoose = require("mongoose");

const CustomersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const customers = mongoose.model("customersMsg", CustomersSchema);

customers.contact = (newCustomer, result) => {
  newCustomer.save().then((err, res) => {
    if (err) result(err, null);
    else result(null, res.CustomersSchema);
  });
};

module.exports = customers;
