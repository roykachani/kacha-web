import Link from 'next/link';
import styles from './styles.module.css';

export const DropDownMenu = () => {
	const DropDownItem = (props) => {
		if (props.children == 'Resume')
			return (
				<Link href={'cv/Roy_kachani_desarrollo_web_oct2021_v2.pdf'}>
					<a
						href={'cv/Roy_kachani_desarrollo_web_oct2021_v2.pdf'}
						className={styles.menu_item}
					>
						{props.children}
					</a>
				</Link>
			);
		return (
			<Link href={`/${props.children.toLowerCase()}`}>
				<a
					href={`/${props.children.toLowerCase()}`}
					className={styles.menu_item}
				>
					{props.children}
				</a>
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
