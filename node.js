const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'diveah@gmail.com',
    pass: 'pinkdino2020'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
  
  res.send('Message sent successfully');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
