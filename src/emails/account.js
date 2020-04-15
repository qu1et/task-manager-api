const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ezapps.team@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}! Thaks for using our app! If you have any problems with the service or you have any ideas how to improve the service, then you can ask for help by writing to us.\nEnjoy!`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ezapps.team@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Goodbye, ${name}. We are glad that you have tried our service. You can also indicate the reason for deleting your account by writing to our email.\nGood luck!`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};