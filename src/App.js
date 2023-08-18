import './App.css';
import Nav from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/hero/hero';
import Merch from './Components/Merchandise/merch';

function App() {
	return (
		<>
			<Nav />
			<div style={{marginTop: 100 + 'px'}}>
				<Hero />
				<Merch />
			</div>
			<Footer />
		</>
	);
}

export default App;
