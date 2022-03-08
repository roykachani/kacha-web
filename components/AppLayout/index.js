import Head from 'next/head';

import styles, { globalStyles } from './styles';

export const AppLayout = ({ children, open, setOpen }) => {
	const handleMenu = () => {
		if (open) setOpen(false);
	};
	return (
		<>
			<Head>
				<title>Roy Kachani | Software Developer</title>
				<meta name="title" content="Roy kachani | Software Developer" />
				<meta
					name="description"
					content="I'm Roy Kachani a 30 years old Software developer born in Buenos Aires, Argentina."
				/>
				<meta content="Roy Kachani" name="copyright" />
				<meta
					name="keywords"
					content="Software, Developer, Programmer, Web, Fullstack, Frontend, Backend"
				/>
				<link rel="canonical" href="https://roykachani.com/" />
				<meta
					name="google-site-verification"
					content="U2v0SLdeGI6pcJaEP4RlwSe_2rtN40IT6e0I6hHRkx0"
				/>
				<meta content="#fff" name="theme-color" />
				<meta property="og:title" content="Roy Kachani" />
				<meta property="og:site_name" content="Roy Kachani" />
				<meta name="author" content="Roy Kachani" />
				<meta property="og:url" content="https://roykachani.com/" />
				<meta
					property="og:description"
					content="I'm Roy Kachani a 31 years old Software developer born in Buenos Aires, Argentina."
				/>
				<meta property="og:image" content="https://roykachani.com/img.jpeg" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" value="@roykachani" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/itc-avant-garde-pro-md"
					rel="preload"
				/>
			</Head>

			<main onClick={handleMenu}>{children}</main>

			<style jsx>{styles}</style>
			<style jsx global>
				{globalStyles}
			</style>
		</>
	);
};
