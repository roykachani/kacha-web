import { useRouter } from 'next/dist/client/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePost } from '../../hook/usePost';
import { schema } from './schema';
import styles from './styles.module.css';

export const ContactForm = () => {
	const router = useRouter();
	const [post] = usePost();

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		post('https://roykachani.vercel.app/api/contact', data);
		router.push('/');
	};

	return (
		<div className={styles.form_container}>
			<form className={styles.contact_form} onSubmit={handleSubmit(handleForm)}>
				<div className={styles.form_input}>
					<span>Name</span>
					<input
						placeholder="Name"
						name="name"
						{...register('name')}
						type="text"
					/>
				</div>
				<div className={styles.form_input}>
					<span>Email</span>
					<input
						placeholder="email"
						name="email"
						{...register('email')}
						type="email"
					/>
				</div>
				<div className={styles.form_input}>
					<span>Description</span>
					<textarea
						placeholder="Describe at least 10 characters."
						name="description"
						{...register('description')}
					/>
				</div>
				<button className={styles.form_btn} type="submit">
					Send
				</button>
			</form>
		</div>
	);
};
