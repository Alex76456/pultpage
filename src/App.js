import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

function App() {
	return (
		<div className="page">
			<div className="page__container">
				<Header />
				<Carousel />
			</div>
		</div>
	);
}

export default App;
