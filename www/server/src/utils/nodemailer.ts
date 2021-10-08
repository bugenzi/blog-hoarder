import nodemailer from 'nodemailer'

async function sendMail(to: string, html: string) {
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

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

// sendMail().catch(console.error);

export default sendMail
