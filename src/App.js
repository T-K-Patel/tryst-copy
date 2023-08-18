import './App.css';
import Nav from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/hero/hero';
import Merch from './Components/Merchandise/merch';

function App() {
	return (
		<div>
			<Nav />
			<div>
				<Hero />
				<Merch />
			</div>
			<Footer />
		</div>
	);
}

export default App;
