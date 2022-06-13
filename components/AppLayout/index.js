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
          content="I'm Roy Kachani a Software developer born in Buenos Aires, Argentina."
        />
        <meta content="Roy Kachani" name="copyright" />
        <meta content="Roy Kachani" name="author" />
        <meta
          name="keywords"
          content="Software, Developer, Programmer, Web, Fullstack, MERN, Fullstack MERN, Frontend, Backend, Projects, Jobs, Freelance, Freelancer, Roy Kachani, Roy, Kachani,Roy Kachani Software Developer, Roy Kachani Software Developer Projects, Roy Kachani Software Developer Jobs, Roy Kachani Software Developer Freelance, desarrollador web, software developer, roy kachani desarrollo web, devolop web aplications, react developer, frontend developer jobs, backend developer jobs"
        />
        <link rel="canonical" href="https://roykachani.com/" />
        <meta
          name="google-site-verification"
          content="U2v0SLdeGI6pcJaEP4RlwSe_2rtN40IT6e0I6hHRkx0"
        />
        <meta content="#fff" name="theme-color" />
        <meta name="author" content="Roy Kachani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:title" content="Roy kachani | Software Developer" />
        <meta property="og:site_name" content="Roy Kachani" />
        <meta property="og:url" content="https://roykachani.com/" />
        <meta
          property="og:description"
          content="I'm Roy Kachani a Software developer born in Buenos Aires, Argentina."
        />
        <meta property="og:image" content="https://roykachani.com/me1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" value="@roykachani" content="@roykachani" />
        <meta
          name="twitter:description"
          content="I'm Roy Kachani a Software developer born in Buenos Aires, Argentina."
        />
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
