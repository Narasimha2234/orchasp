require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: email, 
    to: "info@orchasp.com", 
    subject: "New Contact From Orchasp.in",
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
