const { createTransport } = require('nodemailer');

const GetEmailBody=(data)=>{
    var html=`<p>data</p>`
    return html;
}

const SendMail=(userEmail,data)=>{
var transporter = createTransport({
    server:'gmail',
    auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password,
    },
});

var mailOptions = {
    from: process.env.Email_User,
    to: userEmail,
    subject: `Your subject`,
    html: GetEmailBody(data),
    
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}

module.exports=SendMail;