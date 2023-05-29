// Components
import { Navbar, Footer } from "@/components/index";

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="App">{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
