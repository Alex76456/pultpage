import React from 'react';
import './Footer.css';

import pult from '../../images/logo_pult.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__wraper">
				<div className="footer__blocks">
					<div className="footer__block">
						<div className="footer__logo">
							<a href="https://www.pult.ru/" className="footer__link" target="blank">
								<img className="footer__pult-icon" src={pult} alt="pult" />
							</a>
						</div>

						<div className="footer__call">
							<a className="footer__tel" href="tel:+78005555152" target="blank">
								8(800)555-51-52
							</a>
							<p className="footer__call-text">Звонок по России бесплатный</p>
						</div>
					</div>
					<ul className="footer__columns">
						<li className="footer__column">
							<ul className="footer__list">
								<li className="footer__list-item">
									<a
										className="footer__link link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Акустика
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Hi-Fi
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Винил
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Наушники
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Телевизоры
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Проекторы
									</a>
								</li>
							</ul>
						</li>
						<li className="footer__column">
							<ul className="footer__list">
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Распродажа
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Outlet
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Акции
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Бонусы и скидки
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Рассрочка
									</a>
								</li>
							</ul>
						</li>
						<li className="footer__column">
							<ul className="footer__list">
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										О компании 🡥
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Контакты 🡥
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Салоны 🡥
									</a>
								</li>
								<li className="footer__list-item">
									<a
										className="footer__link"
										href="https://gallo.pult.ru/micro_droplet/240880#"
									>
										Новости 🡥
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<p className="footer__copyright">
					© {new Date().getFullYear()} / PULT.RU / все права защищены
				</p>
			</div>
		</footer>
	);
}

export default Footer;
