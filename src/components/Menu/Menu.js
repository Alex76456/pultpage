import React from 'react';
import './Menu.css';

function Menu() {
	const [ image, setImage ] = React.useState({
		name: 'https://gallo.pult.ru/assets/img/menu/micro.jpg',
		title: 'micro'
	});

	function previewImage(e) {
		setImage((cur) => (cur = { name: e.target.name, title: e.target.title }));
	}

	return (
		<div className="menu">
			<div className="menu__wrapper">
				<div className="menu__col">
					<ul className="menu__widget widget">
						<li className="widget__item">
							<a
								class="widget__link"
								href="https://gallo.pult.ru/micro#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/micro.jpg"
								title="micro"
								onMouseEnter={previewImage}
							>
								micro
							</a>
						</li>
						<li className="widget__item active" data="../../assets/menu/micro_se.jpg">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/micro_se#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/micro_se.jpg"
								title="micro se"
								onMouseEnter={previewImage}
							>
								micro se
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/adiva#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/adiva.jpg"
								title="adiva"
								onMouseEnter={previewImage}
							>
								adiva
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/adiva_se#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/adiva_se.jpg"
								title="adiva se"
								onMouseEnter={previewImage}
							>
								adiva se
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/micro_droplet#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/micro_droplet.jpg"
								title="micro droplet"
								onMouseEnter={previewImage}
							>
								micro droplet
							</a>
						</li>
						<li className="widget__item">
							<a
								class="widget__link"
								href="https://gallo.pult.ru/micro_se_droplet#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/micro_se_droplet.jpg"
								title="micro se droplet"
								onMouseEnter={previewImage}
							>
								micro se droplet
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/adiva_droplet#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/adiva_droplet.jpg"
								title="adiva droplet"
								onMouseEnter={previewImage}
							>
								adiva droplet
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/adiva_se_droplet#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/adiva_se_droplet.jpg"
								title="adiva se droplet"
								onMouseEnter={previewImage}
							>
								adiva se droplet
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/strada_2#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/strada_2.jpg"
								title="strada 2"
								onMouseEnter={previewImage}
							>
								strada 2
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/subwoofers#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/subwoofers.jpg"
								title="subwoofers"
								onMouseEnter={previewImage}
							>
								subwoofers
							</a>
						</li>
						<li className="widget__item">
							<a
								className="widget__link"
								href="https://gallo.pult.ru/accessories#productPagePart"
								name="https://gallo.pult.ru/assets/img/menu/accessories.jpg"
								title="accessories"
								onMouseEnter={previewImage}
							>
								accessories
							</a>
						</li>
					</ul>
				</div>

				<div className="menu__col">
					<img className="menu__img" src={image.name} alt={image.title} />
				</div>
			</div>
		</div>
	);
}

export default Menu;
