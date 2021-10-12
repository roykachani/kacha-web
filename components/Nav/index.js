import Link from 'next/link';

import { Avatar } from '../Avatar';
import { DropDownMenu } from '../DropDownMenu';

import styles from './styles.module.css';
export const Nav = ({ open, setOpen }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.nav}>
					<div className={styles.nav_items}>
						<div className={styles.box_logo}>
							<Link href="/">
								<a href="/">
									<img
										className={styles.logo}
										src="/logo_Roy.png"
										alt="logo image"
									/>
								</a>
							</Link>
						</div>
						<div className={styles.avatar}>
							<Avatar open={open} setOpen={setOpen}>
								<div className={styles.dropDownMenu_container}>
									<DropDownMenu />
								</div>
							</Avatar>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
