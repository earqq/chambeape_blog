const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var nodemailer = require('nodemailer')  
var mongoose =require('./db.js')
var SuggestionModel = require('./suggestion_model.js');
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
app.post("/sendEmailBrand/:email", (req, res) => {
    const output = `
    <h2>Nuevo prospecto quiere nueva version</h2>
    <h2>Email: ${req.params.email}</h2>
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
        subject: 'Easybill Blog Prospecto quiere nueva version', // Subject line
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
app.post("/sendEmailDisenar/:email", (req, res) => {
    const output = `
    <h2>Solicitud de herramienta de diseño</h2>
    <h2>Email: ${req.params.email}</h2>
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
        subject: 'Easybill Landing Prospecto requiere herramienta', // Subject line
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
app.get('/exchange-rate', function(req, res) {
    const request=require('request')
    const cheerio=require('cheerio')
    const textSales={}
    const textPurchases={}
    const totalTexts={}
    request('https://cuantoestaeldolar.pe/', (error,
    response, html)=>{
      if(!error && response.statusCode == 200){
        const $ = cheerio.load(html)
        // const siteHeading=$('.tb_dollar_compra');
        $('.tb_dollar_venta').each((i,el)=>{
          if(i==1) textSales.wester=$(el).text();
          else if(i==2) textSales.sunat=$(el).text();
          else if(i==10) textSales.bcp=$(el).text();
          else if(i==11){
            textSales.interbank=$(el).text();
          } 
          else if(i==12) textSales.bbva=$(el).text();
          else if(i==13) textSales.scotiabank=$(el).text();
          else if(i==14) textSales.nacion=$(el).text();
        })
        $('.tb_dollar_compra').each((i,el)=>{
            if(i==1) textPurchases.wester=$(el).text();
            else if(i==2) textPurchases.sunat=$(el).text();
            else if(i==10) textPurchases.bcp=$(el).text();
            else if(i==11){
              textPurchases.interbank=$(el).text();
            } 
            else if(i==12) textPurchases.bbva=$(el).text();
            else if(i==13) textPurchases.scotiabank=$(el).text();
            else if(i==14) textPurchases.nacion=$(el).text();
          })
        totalTexts.textSales=textSales
        totalTexts.textPurchases=textPurchases
        res.send(totalTexts)
        // const output= siteHeading.find('div').text()
      }
    })
});
app.get('/suggestions', function(req, res) {
    SuggestionModel.find(function(error, result) { 
        res.send(result)
    });
});
app.post('/suggestion/save', function(req, res) {
    var suggest = new SuggestionModel()
    suggest.description=req.body.description
    suggest.email=req.body.email
    suggest.votes=0
    suggest.save(function(err) {
        if (err){ //Si hay un error, lo regresamos
          res.send(err);
    }
    res.json({ message: 'Se creo una sugerencia!' });
    });
});
app.post('/suggestion/update/:id', function(req, res) {
    
    var conditions = { _id: req.params.id }
    , update = { $inc: { votes: 1 }}
    , options = { multi: true };
    
    SuggestionModel.update(conditions, update, options, callback);
    
    function callback (err, numAffected) {
        res.json({ message: numAffected });
    // numAffected is the number of updated documents
    }
});
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}