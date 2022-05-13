const nodeMailer = require('nodemailer')

const listemail = [
	'noreply@winvip.trade', 'no-reply@winvip.trade'
];

const adminEmail = 'winvip.trade@gmail.com'
const adminPassword = 'V%f22a?>Qw5~@_&p'
const sendMail = (to, subject, htmlContent) => {
  const rd = Math.floor(Math.random() * 2);
  const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })
  const options = {
    from: `WINVIP.TRADE <${listemail[rd]}>`,
    to: to,
    subject: subject,
    html: htmlContent,
  }
  return transporter.sendMail(options)
}
module.exports = {
  sendMail
}