import Head from 'next/head';
// import { Nav } from '../nav';

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
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/> */}
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;500;800&display=swap"
					rel="stylesheet"
				></link> */}
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
