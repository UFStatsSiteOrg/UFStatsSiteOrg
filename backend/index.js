const nodemailer = require('nodemailer');
require('dotenv').config();
var cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express()
// const port = 8080

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/details", {
//     useNewUrlParser: true
// });

// const connection = mongoose.connection;

// connection.once("open", function() {
//     console.log("Connection with MongoDB was successful");
// });

// let post = (require("./model"));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../react-app/build', 'index.html'));
});

app.use(bodyParser.json());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.options('*', cors());

app.post('/api/contact', cors(corsOptions), async (req, res) => {
    console.log(req.body);
    const{name, email, message} = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: procces.env.USER,
            pass: process.env.PASS
        },
    });

    try {
        const emailResponse = await transporter.sendMail({
            from: email,
            to: 'ufswestatsclub@gmail.com',
            subject: `Contact form submission from ${name}`,
            html: `<p>You have a new contact form submission</p><br>
            <p><strong> Name:  </strong> ${name} </p><br>
            <p><strong> Email: </strong> ${email} </p><br>
            <p><strong> Message: </strong> ${message} </p><br>`,
        });
        console.log('Message Sent', emailResponse.messageId);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(req.body);
})


// app.use("/", router);

// router.route("/getData").get(function(req, res) {
//     post.find({}, function(err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})