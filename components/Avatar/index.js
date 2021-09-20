import { useState } from 'react';
import styles from './styles.module.css';

export const Avatar = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className={styles.button}
				onClick={() => setOpen(!open)}
			>
				<img className={styles.img} alt="Roy-img" src="/img.jpeg" />
			</button>
			{!!open && props.children}
		</>
	);
};
