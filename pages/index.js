import Link from 'next/link';
import { Nav } from '../components/Nav';
import styles from '../styles/Home.module.css';
export default function Home() {
	return (
		<>
			<Nav />
			<section className={styles.welcom_container}>
				<span className="text-gray-600 font-semibold text-lg">
					Hello, I&apos;m a
				</span>
				<h1 className="hidden">
					<div className={styles.line1}>Software Developer</div>
					<div className={styles.lineBox}>
						<div className={styles.line2}>from </div>
						<div className={styles.line3}>Argentina.</div>
					</div>
				</h1>
				<Link href="#">
					<div className={styles.button_contact}>
						<a>Get in touch!</a>
					</div>
				</Link>
			</section>
			<section className={styles.projects_section_container}>
				<div className={styles.projects_title}>
					<h2>Projects</h2>
				</div>

				<div className={styles.projects_container}>
					<div className={styles.projects}></div>
				</div>
			</section>
		</>
	);
}
