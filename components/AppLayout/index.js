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
        <meta
          name="keywords"
          content="Software, Developer, Programmer, Web, Fullstack, MERN, Fullstack MERN, Frontend, Backend, Projects, Jobs, Freelance, Freelancer, Roy Kachani, Roy, Kachani,Roy Kachani Software Developer, Roy Kachani Software Developer Projects, Roy Kachani Software Developer Jobs, Roy Kachani Software Developer Freelance"
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
          content="I'm Roy Kachani a Software developer born in Buenos Aires, Argentina."
        />
        <meta property="og:image" content="https://roykachani.com/me1.jpeg" />

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
