const path = require('path')

const nodemailer = require('nodemailer')



const smtpTransport = require('nodemailer-smtp-transport')

const hbs = require('nodemailer-express-handlebars')



const { host, port, user, pass } = require('../config/mail.json')



const transport = nodemailer.createTransport(smtpTransport({

  host, 

  port,

  auth: { user, pass }

}));



const handlebarOptions = {

  viewEngine: {

    extName: '.html',

    partialsDir: path.resolve('./src/resources/mail/'),

    layoutsDir: path.resolve('./src/resources/mail/'),

    defaultLayout: null,

  },

  viewPath: path.resolve('./src/resources/mail/'),

  extName: '.html',

};



transport.use('compile', hbs(handlebarOptions));



module.exports = transport;