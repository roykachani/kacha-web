import { LinkButton } from '../LinkButton';
import styles from './styles.module.css';

export const WorkContainer = ({ w, index }) => {
	return (
		<>
			<div className={styles.body_container}>
				<div className={styles.text_container}>
					<h2 className="">{w.name}</h2>
					<span className={styles.role}>
						{w.role} | {w.type}
					</span>
					<div className={styles.description}>
						<span>{w.description}</span>
					</div>
					<div className={styles.btn_link}>
						<LinkButton url={w.url} type={w.type} />
					</div>
				</div>
			</div>
			<div className={styles.img}>
				<a href={w.url} target="_blank" rel="noreferrer">
					<img src={w.image} className={styles.image} alt={`${w.name}-img`} />
				</a>
			</div>
		</>
	);
};
