const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-message", async (req, res) => {

const { name, email, phone, message } = req.body;

const transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
  user: "ossfzcenergylogistics@gmail.com",
  pass: "khwf lwxu jhlo bhau"
 }
});

const mailOptions = {
 from: "ossfzcenergylogistics@gmail.com",
 replyTo: email,
 to: "ossfzcenergylogistics@gmail.com",
 subject: "New Contact Message",
 html: `
 <h3>Contact Form</h3>
 <p><b>Name:</b> ${name}</p>
 <p><b>Email:</b> ${email}</p>
 <p><b>Phone:</b> ${phone}</p>
 <p><b>Message:</b> ${message}</p>
 `
};

try{
 await transporter.sendMail(mailOptions);
 res.json({message:"Email sent"});
}
catch(error){
 res.status(500).json(error);
}

});

app.listen(5000, () => {
 console.log("Server running on port 5000");
});