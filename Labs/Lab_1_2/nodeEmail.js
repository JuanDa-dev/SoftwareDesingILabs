// app.js
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'jdanzolaq@outlook.com',
    pass: '0000000'
  }
});

// Define mail options
const mailOptions = {
  from: 'jdanzolaq@outlook.com',
  to: 'jdanzolaq@outlook.com',
  subject: 'Test email',
  text: 'Hello from Node.js!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
