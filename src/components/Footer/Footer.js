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
							<a href="https://www.pult.ru/" class="footer__link" target="blank">
								<img className="footer__pult-icon" src={pult} alt="pult" />
							</a>
						</div>

						<div className="footer__call">
							<a class="footer__tel" href="tel:+78005555152" target="_blank">
								8(800)555-51-52
							</a>
							<p class="footer__call-text">Звонок по России бесплатный</p>
						</div>
					</div>
					<ul class="footer__columns">
						<li class="footer__column">
							<ul class="footer__list">
								<li class="footer__list-item">
									<a class="footer__link link" href="#">
										Акустика
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Hi-Fi
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Винил
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Наушники
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Телевизоры
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Проекторы
									</a>
								</li>
							</ul>
						</li>
						<li class="footer__column">
							<ul class="footer__list">
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Распродажа
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Outlet
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Акции
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Бонусы и скидки
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Рассрочка
									</a>
								</li>
							</ul>
						</li>
						<li class="footer__column">
							<ul class="footer__list">
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										О компании 🡥
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Контакты 🡥
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
										Салоны 🡥
									</a>
								</li>
								<li class="footer__list-item">
									<a class="footer__link" href="#">
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
