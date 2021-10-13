import { useState } from 'react';

import { AppLayout } from '../components/AppLayout';

function MyApp({ Component, pageProps }) {
	const [open, setOpen] = useState(false);

	return (
		<AppLayout open={open} setOpen={setOpen}>
			<Component {...pageProps} open={open} setOpen={setOpen} />
		</AppLayout>
	);
}

export default MyApp;
