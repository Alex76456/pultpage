import React from 'react';
import './Product.css';
import { microData } from '../../data/data';

function Product() {
	const [ info, setInfo ] = React.useState({
		link: microData['creme'].link,
		title: microData['creme'].title,
		fPrice: microData['creme'].fPrice,
		sPrice: microData['creme'].sPrice,
		payLink: microData['creme'].payLink
	});

	function onColor(e) {
		const key = e.target.name;
		setInfo(
			(cur) =>
				(cur = {
					link: microData[key].link,
					title: microData[key].title,
					fPrice: microData[key].fPrice,
					sPrice: microData[key].sPrice,
					payLink: microData[key].payLink
				})
		);
	}

	return (
		<div className="product">
			<div className="product__grid">
				<div className="product__picture">
					<img
						alt="MICRO SINGLE DROPLET BRONZE"
						className="product__img"
						src={info.link}
					/>
				</div>
				<div className="product__content">
					<h2 className="product__title title">{info.title}</h2>
					<p className="product__text">
						Стильная подвесная акустическая система нашего классического дизайна Micro с
						оригинальным небольшим высококачественным динамиком. Он оснащен 4-х дюймовым
						цельнометаллическим сферическим корпусом, 3-х дюймовым специально
						разработанным динамиком и переработанной клеммной зоной. Поставляется с
						2-метровым акустическим кабелем и с комплектом потолочной розетки.
					</p>
					<div className="product__get">
						<a className="product__btn link" href={info.payLink} target="blank">
							купить
						</a>
						<div className="product__prices">
							<p className="product__price product__price--before">{info.fPrice}</p>
							<p className="product__price product__price--after">{info.sPrice}</p>
						</div>
					</div>
				</div>
			</div>
			<p className="product__question">выбери свой цвет</p>
			<ul className="product__colors">
				<li className="product__color">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET CREME"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190425.jpg"
							name="creme"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET GLOSS WHITE"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190421.jpg"
							name="glossWhite"
							onClick={onColor}
						/>
					</button>
				</li>

				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET URBAN GREY"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190426.jpg"
							name="urbanGrey"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET RACE RED"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190423.jpg"
							name="raceRed"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET SATIN BLACK"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190422.jpg"
							name="satinBlack"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET MATT WHITE"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190427.jpg"
							name="mattWhite"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET STAINLESS STEEL"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190429.jpg"
							name="stainlessSteel"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET BRONZE"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190430.jpg"
							name="dropletBronze"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET GOLD"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_190431.jpg"
							name="dropletGold"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET LUXE CHROME"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_240878.jpg"
							name="luxeChrome"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET LUXE COPPER"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_240879.jpg"
							name="luxeCopper"
							onClick={onColor}
						/>
					</button>
				</li>
				<li className="product__color ">
					<button className="product__color-button">
						<img
							alt="MICRO SINGLE DROPLET LUXE GOLD"
							className="product__img-color"
							src="https://gallo.pult.ru/assets/img/products/micro_droplet/small_240880.jpg"
							name="luxeGold"
							onClick={onColor}
						/>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Product;
