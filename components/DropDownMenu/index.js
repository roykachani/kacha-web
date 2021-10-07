import Link from 'next/link';
import styles from './styles.module.css';

export const DropDownMenu = () => {
	const DropDownItem = (props) => {
		if (props.children == 'Resume')
			return (
				<Link href={'cv/Roy_kachani_octubre2021.pdf'}>
					<a className={styles.menu_item}>{props.children}</a>
				</Link>
			);
		return (
			<Link href={`/${props.children.toLowerCase()}`}>
				<a className={styles.menu_item}>{props.children}</a>
			</Link>
		);
	};

	return (
		<div className={styles.dropdown}>
			<DropDownItem>Skills</DropDownItem>
			<DropDownItem>About</DropDownItem>
			<DropDownItem>Resume</DropDownItem>
		</div>
	);
};
