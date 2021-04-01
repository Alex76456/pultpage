import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Product';

function App() {
	return (
		<div className="page">
			<div className="page__container">
				<Header />
				<Carousel />
				<Menu />
				<Product />
				<Footer />
			</div>
		</div>
	);
}

export default App;
