import './App.css';
import Nav from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/hero/hero';
import Merch from './Components/Merchandise/merch';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Nav />
				<div style={{ paddingTop: 100 + 'px' }}>
					<Switch>
						<Route exact path='/About'>
							<Merch />
						</Route>
						<Route exact path='/'>
							<Hero />
							<Merch />
						</Route>
						<Route exact path='/Merch/shop'>
							<div style={{ height: 200 + 'px' }}>
								<h1>You can buy anything from here</h1>
								<h3>Go get some Money first!!</h3>
							</div>
						</Route>
						<Route path='*'>
							<div style={{ height: 200 + 'px' }}>
								<h1>Error: 404</h1>
								<h3>Page not found!!</h3>
							</div>
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
