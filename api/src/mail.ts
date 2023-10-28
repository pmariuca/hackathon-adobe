import * as nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter;

const setupMail = () => {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
};

export { setupMail, transporter };
