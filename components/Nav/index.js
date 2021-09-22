import { Avatar } from '../Avatar';
import { DropDownMenu } from '../DropDownMenu';
import styles from './styles.module.css';
export const Nav = ({ open, setOpen }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.nav}>
					<div className={styles.nav_items}>
						<div className={styles.logo}>
							<h1>Roy Kachani.</h1>
						</div>
						<div className={styles.avatar}>
							<Avatar open={open} setOpen={setOpen}>
								<DropDownMenu />
							</Avatar>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
