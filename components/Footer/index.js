import TwitterIcon from '../Icons/TwitterIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon';
import styles from './styles.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<div className={styles.footer}>
				<div className={styles.footer_box}>
					<div className={styles.box_l}>Made with ❤ in Argentina.</div>
					<div className={styles.box_r}>
						<div className={styles.anchor_box}>
							<a
								href="https://twitter.com/Roykachani"
								target="_blank"
								rel="noreferrer"
								className={styles.anchor}
							>
								<TwitterIcon className={styles.TwitterIcon} />
							</a>
						</div>
						<div className={styles.anchor_box}>
							<a
								href="https://www.github.com/roykachani"
								target="_blank"
								rel="noreferrer"
								className={styles.anchor}
							>
								<GitHubIcon className={styles.GitHubIcon} />
							</a>
						</div>
						<div className={styles.anchor_box}>
							<a
								href="https://www.linkedin.com/in/roykachani/"
								target="_blank"
								rel="noreferrer"
								className={styles.anchor}
							>
								<LinkedInIcon className={styles.LinkedInIcon} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
