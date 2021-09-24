import styles from './styles.module.css';

export const ContactForm = () => {
	const handleForm = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.form_container}>
			<form className={styles.contact_form}>
				<div className={styles.form_input}>
					<span>Name</span>
					<input name="name" type="text" />
				</div>
				<div className={styles.form_input}>
					<span>Email</span>
					<input name="email" type="email" />
				</div>
				<div className={styles.form_input}>
					<span>Description</span>
					<textarea name="description" />
				</div>
				<button className={styles.form_btn} type="submit" onClick={handleForm}>
					Send!
				</button>
			</form>
		</div>
	);
};
