import Link from 'next/link';
import styles from './styles.module.css';

export const LinkButton = ({ url, type }) => {
	return (
		<>
			<div className={styles.linkbutton}>
				<Link href={url}>
					<a>{type === 'Project' && 'Open project'}</a>
				</Link>
			</div>
		</>
	);
};
