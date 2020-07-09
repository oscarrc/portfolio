const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const dotenv = require("dotenv");

dotenv.config();
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN
  }
});

exports.sendMail = functions
  .region("europe-west3")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      const from = req.body.from;
      const subject = req.body.subject;
      const message = req.body.message;

      const sentMail = {
        from: process.env.NAME + " " + process.env.USER,
        to: process.env.NAME + " " + process.env.USER,
        subject: subject,
        html: `<p>${from} has contacted you.</p>
               <p>He said:</p>
               <p>${message}</p>`
      };

      const ackMail = {
        from: process.env.NAME + " " + process.env.USER,
        to: from,
        subject: "Thank you for contacting",
        html: `<p>Hey there!</p>
             <p>I've received your email.</p>
             <p>I've reading it as soon as I could, and rest asure I'll be replying</p>
             <p>Thank you for writing</p>
             <p>Cheers</p>`
      };

      return transporter.sendMail(sentMail, (err, info) => {
        if (err) {
          return res.send({ success: false });
        }

        return transporter.sendMail(ackMail, (err, info) => {
          if (err) {
            return res.send({ success: false });
          }
          return res.send({ success: true });
        });
      });
    });
  });
