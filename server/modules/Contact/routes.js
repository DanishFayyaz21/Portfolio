const express = require("express");
const router = express.Router();
const customerscontroller = require("./controller");

router
    .post("/", customerscontroller.contact) // Retrieve all sms category

module.exports = router;
