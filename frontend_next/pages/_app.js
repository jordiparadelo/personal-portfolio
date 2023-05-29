// import { DM_Sans, ClashDisplay } from 'next/font/google';
import "styles/globals.scss";
// Components
import { Layout } from '@/components/index'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
