require("dotenv").config();

const nodemailer = require("nodemailer");
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL || "chadiayari@mes.ac.in", // TODO: your gmail account
    pass: process.env.PASSWORD || "oussamahouess", // TODO: your gmail password
  },
});

// Step 2
let mailOptions = {
  from: "chadiayari@mes.ac.in", // TODO: email sender
  to: "info@chadiayari.com", // TODO: email receiver
  subject: "Contact form",
  text: "Wooohooo it works!!",
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log("Error occurs");
  }
  return log("Email sent!!!");
});
