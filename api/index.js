const express = require('express')
const app = express()
var nodemailer = require('nodemailer')  
// app.use((req, res, next) => { //doesn't send response just adjusts it
//    res.header("Access-Control-Allow-Origin", "") // to give access to any origin
//    res.header(
//        "Access-Control-Allow-Headers",
//        "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
//    );
//    if(req.method === 'OPTIONS'){
//        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
//        return res.status(200).json({});
//    }
//    next(); //so that other routes can take over
// })
app.post("/sendEmail/:name/:email/:phone", (req, res) => {
    const output = `
    <h2>Nuevo prospecto solicita llamada</h2>
    <h2>Nombre: ${req.params.name}</h2>
    <h2>Email: ${req.params.email}</h2>
    <h2>Celular: ${req.params.phone}</h2>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "postmaster@sandbox5018c68236ad4aefb21e717c30f8b13e.mailgun.org", // generated ethereal user
            pass: "2ad984d84df17aa351dd7c10f332169f-73ae490d-5f796562"  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    // // setup email data with unicode symbols
    let mailOptions = {
        from: 'erosalesq@gmail.com', // sender address
        to: 'teamakeasy@gmail.com', // list of receivers
        subject: 'Easybill Blog Prospecto '+req.params.name+' requiere llamada', // Subject line
        text: 'Nuevo Contacto ', // plain text body
        html: output// html body
    };
    // // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({msg: "Tu mensaje a sido enviado correctamente"});
    });
})
app.post("/sendEmailOffert/:name/:email/:phone", (req, res) => {
    const output = `
    <h2>Nuevo prospecto solicita llamada de oferta</h2>
    <h2>Nombre: ${req.params.name}</h2>
    <h2>Email: ${req.params.email}</h2>
    <h2>Celular: ${req.params.phone}</h2>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "postmaster@sandbox5018c68236ad4aefb21e717c30f8b13e.mailgun.org", // generated ethereal user
            pass: "2ad984d84df17aa351dd7c10f332169f-73ae490d-5f796562"  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    // // setup email data with unicode symbols
    let mailOptions = {
        from: 'erosalesq@gmail.com', // sender address
        to: 'teamakeasy@gmail.com', // list of receivers
        subject: 'Easybill Landing Prospecto requiere llamada', // Subject line
        text: 'Nuevo Contacto ', // plain text body
        html: output// html body
    };
    // // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({msg: "Tu mensaje a sido enviado correctamente"});
    });
})
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}