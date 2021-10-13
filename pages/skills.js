import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import skills from '../utils/skills';
import styles from '../styles/Skills.module.css';

export default function Skills({ open, setOpen }) {
	return (
		<>
			<Head>
				<title>Skills | Roy Kachani</title>
			</Head>
			<Nav open={open} setOpen={setOpen} />
			<div className={styles.skills_container}>
				<div className={styles.skills_title}>
					<h1>Skills</h1>
				</div>
				<div className={styles.skills_box}>
					{skills.map((skill) => (
						<div className={styles.skill} key={skill.name}>
							<div className={styles.icon}>{skill.icon}</div>
							<div>
								<span className={styles.name}>{skill.name}</span>
							</div>
							<div>
								<span className={styles.year}>{skill.year}</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
