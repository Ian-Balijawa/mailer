"use strict";
require("dotenv/config");
const nodemailer = require("nodemailer");

const to = `${process.env.RECIPIENT_EMAIL},'',''`;
const bcc = ",,";
const cc = ",,";
const attachments = [];

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"GHOST 👻" ${process.env.SENDER_EMAIL}`,
    to,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<h1>Hello world?</h1>",
    bcc,
    cc,
    attachments,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
