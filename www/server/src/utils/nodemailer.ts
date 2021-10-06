import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to: string, html: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'rgu5q453lujum2vk@ethereal.email', // generated ethereal user
      pass: 'HNbUdfgnf4qKDFgxgK', // generated ethereal password
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to, // list of receivers
    subject: 'Change password', // Subject line
    html, // plain text body
    // html: '<b>Hello world?</b>' // html body
  })

  console.log('Message sent: %s', info.messageId)

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

// sendMail().catch(console.error);

export default sendMail
