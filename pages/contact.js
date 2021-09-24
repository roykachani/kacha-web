import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	return (
		<>
			<Nav />
			<div className={styles.contact_container}>
				<div className={styles.contact_title}>
					<h1>Contact me</h1>
				</div>
				<div className={styles.contact}>
					<ContactForm />
				</div>
			</div>
			<Footer />
		</>
	);
}
