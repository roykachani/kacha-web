import Head from 'next/head';

import styles, { globalStyles } from './styles';

export const AppLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Roy Kachani </title>
				<meta
					name="description"
					content="I'm Roy Kachani a 30 years old Software developer born in Buenos Aires, Argentina."
				/>
				<meta
					name="keywords"
					content="Software, Developer, Programmer, Web, Fullstack, Frontend, Backend"
				/>
				<meta property="og:title" content="Roy Kachani" />
				<meta property="og:site_name" content="Roy Kachani" />
				<meta name="author" content="Nuzze" />
				<meta property="og:url" content="https://roykachani.vercel.app/" />
				<meta
					property="og:description"
					content="I'm Roy Kachani a 30 years old Software developer born in Buenos Aires, Argentina."
				/>
				<meta
					property="og:image"
					content="https://roykachani.vercel.app/images/img.jpeg"
				/>
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
					rel="stylesheet"
				></link>
			</Head>

			<main>{children}</main>

			<style jsx>{styles}</style>
			<style jsx global>
				{globalStyles}
			</style>
		</>
	);
};
