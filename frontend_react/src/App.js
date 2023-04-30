import { useEffect } from "react";
// Components
import { Navbar } from "components";
import { Footer } from "container";
// Styles
import "App.scss";
//lib
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from "react-router-dom";
import { Home, Portfolio, ProjectPage } from "pages";

const App = () => {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/portfolio'>
        <Portfolio />
				</Route>
				<Route path='/portfolio/:projectId'>
        <ProjectPage />
				</Route>
				{/* <Route
					path='/portfolio'
					element={}
				/>
				<Route
					path='/portfolio/:projectId'
					element={}
				/> */}
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
