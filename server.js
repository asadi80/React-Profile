const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const path = require("path");
const PORT = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));
if(process.env.NODE_ENV === "production"){
  app.use(express.static('build'));
  app.get('*',(req, res) =>{
    req.sendFile(path.resolve(__dirname, "build", "index.html"));

  })
}


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
  
    port: 465,
    secure: false,
    auth: {
      type: 'OAuth2',
      user: process.env.Email,
      pass: process.env.Password,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "llyybb80@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });