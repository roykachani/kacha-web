const { sendMail } = require('../../sevices/mailing');
const { contactTemplate } = require('../../utils/contactTemplate');

export default async function handleMailing(req, res) {
	try {
		const { name, email, description } = req.body;

		const send = await sendMail({
			from: email,
			to: process.env.USER_EMAIL,
			subject: `Contact for developer job from ${name}`,
			html: contactTemplate({
				name,
				email,
				description,
			}),
		});
		res.status(200);
	} catch (e) {
		console.error(e);
		res.status(500);
	}
}
