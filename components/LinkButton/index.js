import Link from 'next/link';
import styles from './styles.module.css';

export const LinkButton = ({ url, type }) => {
	return (
		<>
			<Link href={url}>
				<a className={styles.linkbutton} href={url} target="_blank">
					{type === 'Project' && 'Open project'}
				</a>
			</Link>
		</>
	);
};
