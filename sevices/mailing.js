const nodemailer = require('nodemailer');

const sendMail = async ({
	from,
	to = process.env.USER_EMAIL,
	subject = 'Nuevo contacto web',
	html,
}) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			//host: 'smtp.gmail.com',
			//port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.USER_EMAIL, // generated ethereal user
				pass: process.env.PASSWORD_EMAIL, // generated ethereal password
			},
			tls: {
				rejectUnauthorized: false,
			}, //flag para gmail, no rechace los salientes
		});

		// send mail with defined transport object
		const { messageId } = await transporter.sendMail({
			from: `"${from}" "<no-reply@correo.com>"`,
			to,
			subject,
			html,
		});

		return messageId;
	} catch (e) {
		console.error(e);
		throw e;
	}
};

module.exports = { sendMail };
