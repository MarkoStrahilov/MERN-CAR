const nodemailer = require('nodemailer')

const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        auth: {
            user: 'markostrahilov@outlook.com',
            pass: '4893ujyhgoierhjp390-4[ewh.g;erhi93u409-[hg;erh.ioe4kmrhj/eriohkme4]]'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: 'markostrahilov@outlook.com',
        to: options.email,
        subject: options.subject,
        html: options.text
    }


    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log('Error while sending mail: ' + err)
        } else {
            console.log('opt verification token sent to:', info.messageId);
        }
    })

}


module.exports = sendEmail;