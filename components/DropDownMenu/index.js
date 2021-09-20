import Link from 'next/link';
import styles from './styles.module.css';

export const DropDownMenu = () => {
	const DropDownItem = (props) => {
		return (
			<Link href={`/${props.children}`}>
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
