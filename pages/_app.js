import { useState } from 'react';
import Script from 'next/script';

import { AppLayout } from '../components/AppLayout';
import { MainProvider } from '../context/mainContext';

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P0T80701XL"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-P0T80701XL');
		`}
      </Script>
      <AppLayout open={open} setOpen={setOpen}>
        <MainProvider>
          <Component {...pageProps} open={open} setOpen={setOpen} />
        </MainProvider>
      </AppLayout>
    </>
  );
}

export default MyApp;
